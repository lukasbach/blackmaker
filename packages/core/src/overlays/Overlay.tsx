import * as React from 'react';
import { Falsy, ThemeProvider, useTheme } from '..';
import cxs from 'cxs';
import ReactDOM from 'react-dom';
import { MouseEvent, useCallback } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { OverlayTransition } from './transitions/OverlayTransition';
import { useHotKey } from '@blackmaker/hotkeys/out/useHotKey';

const OVERLAY_ELEMENT_ID = 'blackmaker-overlay';

export interface OverlayProps {
  renderBackdrop?: boolean;
  centerWithinBackdrop?: boolean;
  backdropColor?: string;
  handleBackdropMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  closeOnClickBackdrop?: boolean;
  closeOnEscape?: boolean;
  isOpen?: boolean;
  onClose?: () => any;
  renderContent: (props: React.HTMLAttributes<HTMLDivElement>) => React.ReactNode;
  transition?: OverlayTransition;
  noPointerEvents?: boolean;
}

const OverlayInner: React.FC<OverlayProps> = props => {
  useHotKey(
    {
      global: true,
      combination: 'esc',
      id: 'close',
    },
    () => {
      if (props.closeOnEscape ?? true) {
        props.onClose();
      }
    }
  );

  const onMouseDown = useCallback(
    e => {
      if (props.closeOnClickBackdrop) {
        props.onClose();
      }
      props.handleBackdropMouseDown?.(e);
    },
    [props.closeOnClickBackdrop, props.onClose, props.handleBackdropMouseDown]
  );

  if (!props.transition && !props.isOpen) {
    return null;
  }

  let className = '';

  if (props.renderBackdrop) {
    className = cxs({
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      overflow: 'hidden',
      pointerEvents: props.noPointerEvents ? 'none' : undefined,
    });
  }

  const content = (
    <div className={className} onMouseDown={onMouseDown}>
      {props.renderContent({ onMouseDown: e => e.stopPropagation() })}
    </div>
  );

  if (props.transition) {
    return (
      <div
        className={cxs({
          height: '100%',
          '> div': {
            height: '100%',
            backgroundColor: props.backdropColor ?? 'rgba(0, 0, 0, 0)',
            ...(props.centerWithinBackdrop
              ? {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }
              : {}),
          },
        })}
      >
        <CSSTransition
          in={props.isOpen}
          timeout={{
            enter: props.transition.enter.duration,
            exit: props.transition.exit.duration,
          }}
          onEnter={() => console.log('Enter')}
          onExit={() => console.log('Exit')}
          unmountOnExit={true}
          classNames={{
            enter: cxs({
              '> div': {
                opacity: props.transition.enter.opacity ? 0 : undefined,
                transform: props.transition.enter.transform ?? undefined,
              },
              backgroundColor: 'rgba(0, 0, 0, 0) !important',
            }),
            enterActive: cxs({
              '> div': {
                opacity: props.transition.enter.opacity ? 1 : undefined,
                transition: `${props.transition.enter.duration}ms all ease`,
                transform: props.transition.enter.transform ? 'translateY(0) scale(1) !important' : undefined,
              },
              transition: `${props.transition.enter.duration}ms all ease`,
              backgroundColor: (props.backdropColor ?? 'rgba(0, 0, 0, 0)') + ' !important',
            }),
            exit: cxs({
              '> div': {
                opacity: props.transition.exit.opacity ? 1 : undefined,
                transform: props.transition.exit.transform ? 'translateY(0) scale(1)' : undefined,
              },
              backgroundColor: props.backdropColor ?? 'rgba(0, 0, 0, 0)',
            }),
            exitActive: cxs({
              '> div': {
                opacity: props.transition.exit.opacity ? '0 !important' : undefined,
                transform: props.transition.exit.transform
                  ? props.transition.exit.transform + ' !important'
                  : undefined,
                transition: `${props.transition.exit.duration}ms all ease`,
              },
              backgroundColor: 'rgba(0, 0, 0, 0) !important',
              transition: `${props.transition.enter.duration}ms all ease`,
            }),
          }}
        >
          {content}
        </CSSTransition>
      </div>
    );
  } else {
    return content;
  }
};

export const Overlay: React.FC<OverlayProps> = props => {
  const theme = useTheme();
  let el = document.getElementById(OVERLAY_ELEMENT_ID);

  if (!el) {
    el = document.createElement('div');
    el.id = OVERLAY_ELEMENT_ID;
    document.body.appendChild(el);
  }

  return ReactDOM.createPortal(
    <ThemeProvider themeDefinition={theme.definition} noRoot={true}>
      <OverlayInner {...props} />
    </ThemeProvider>,
    el
  );
};
