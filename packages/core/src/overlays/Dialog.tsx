import * as React from 'react';
import { HtmlElementProps, Intent, MaybeIcon } from '..';
import { Overlay, OverlayProps } from './Overlay';
import { CardContainer } from '../card/CardContainer';
import { CardArea } from '../card/CardArea';
import { dialogTransition } from './transitions/dialogTransition';
import { OverlayTransition } from './transitions/OverlayTransition';
import { OverlayCloseButton } from './OverlayCloseButton';

export interface DialogProps extends HtmlElementProps {
  isOpen: boolean;
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  highlightedTitle?: boolean;
  titleIntent?: Intent;
  icon?: MaybeIcon;
  closeButton?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  footer?: JSX.Element;
  footerAlignRight?: boolean;
  onClose?: () => any;
  transition?: OverlayTransition;
  overlayProps?: Partial<OverlayProps>;
}

export const Dialog: React.FC<DialogProps> = props => {
  return (
    <Overlay
      isOpen={props.isOpen}
      transition={props.transition === undefined ? dialogTransition : props.transition}
      onClose={props.onClose}
      closeOnClickBackdrop={props.closeOnBackdrop ?? true}
      closeOnEscape={props.closeOnEscape ?? true}
      renderBackdrop={true}
      backdropColor="rgba(0, 0, 0, .2)"
      centerWithinBackdrop={true}
      renderContent={p => (
        <div {...p}>
          {props.closeButton && <OverlayCloseButton onClick={props.onClose} />}
          <CardContainer
            css={{
              minWidth: '300px',
              maxWidth: '600px',
              ...props.css,
            }}
            shadow={1}
            elementProps={props.elementProps}
          >
            {props.title && (
              <CardArea
                intent={props.titleIntent}
                header={true}
                highlighted={props.highlightedTitle}
                headingLevel={1}
                icon={props.icon}
                content={props.title}
                subtitle={props.subtitle}
              />
            )}
            {props.children}
            {props.footer && (
              <CardArea
                muted={true}
                css={{
                  textAlign: props.footerAlignRight ? 'right' : undefined,
                }}
              >
                {props.footer}
              </CardArea>
            )}
          </CardContainer>
        </div>
      )}
      {...props.overlayProps}
    />
  );
};
