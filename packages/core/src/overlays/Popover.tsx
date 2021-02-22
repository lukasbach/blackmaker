import * as React from 'react';
import { forwardRef, HTMLAttributes, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ButtonGroupContext, Falsy, HtmlElementProps, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import Tippy, { TippyProps } from '@tippyjs/react';
import { useHotKey } from '@blackmaker/hotkeys/out/useHotKey';
import { Instance } from 'tippy.js';
import { getPopoverInitialTransform } from './getPopoverInitialTransform';

export enum PopoverOpenTrigger {
  HoverReference = 'mouseenter focus focusin',
  FocusReference = 'focus focusin',
  ClickReference = 'click',
  Manually = 'manual',
}

export interface PopoverProps extends HtmlElementProps {
  isOpen?: boolean;
  trigger?: PopoverOpenTrigger | string;
  placement?: TooltipPlacement;
  content: React.ReactNode | string;
  noLeftPadding?: boolean;
  autoFocus?: boolean;
  closeOnEscape?: boolean;
  closeOnClick?: boolean;
  closeOnClickInside?: boolean;
  inline?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
  animated?: boolean;
  animationHiddenStyles?: cxs.CSSObject;
  animationDisplayStyles?: cxs.CSSObject;
  animationDefaultStyles?: cxs.CSSObject;
  animationDuration?: number;
  tippyProps?: Partial<TippyProps>;
  interactiveDebounce?: number;
  interactiveBorder?: number;
  maxContentHeight?: number;
  maxContentWidth?: number;
  contentProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> | Falsy;
  contentCss?: cxs.CSSObject | Falsy;
}

export const Popover = React.forwardRef<Instance | undefined, React.PropsWithChildren<PopoverProps>>((props, ref) => {
  const theme = useTheme();
  const instance = useRef<Instance>();
  const buttonContextProps = useContext(ButtonGroupContext) ?? {};
  const [visible, setVisible] = useState(false);
  const [visibleDelayed, setVisibleDelayed] = useState(false);

  useImperativeHandle(ref, () => instance.current);
  useEffect(() => {
    setTimeout(() => setVisibleDelayed(visible));
  }, [visible]);

  useHotKey(
    {
      global: true,
      combination: 'esc',
      id: 'close',
    },
    () => {
      if (props.closeOnEscape ?? true) {
        instance.current?.hide();
      }
    }
  );

  const placement = props.placement ?? TooltipPlacement.Bottom;
  const animated = props.animated ?? true;
  const animationDuration = props.animationDuration ?? 80;
  const animationHiddenStyles =
    animated &&
    (props.animationHiddenStyles ?? {
      opacity: 0,
      transform: getPopoverInitialTransform(placement),
    });
  const animationDisplayStyles =
    animated &&
    (props.animationDisplayStyles ?? {
      opacity: 1,
      transform: 'none',
    });

  return (
    <Tippy
      onMount={i => (instance.current = i)}
      arrow={false}
      trigger={props.trigger ?? PopoverOpenTrigger.HoverReference}
      onShow={instance => {
        setVisible(true);
        props.tippyProps?.onShow?.(instance);
        props.onOpen?.();
      }}
      onHide={instance => {
        setVisible(false);
        props.tippyProps?.onHide?.(instance);
        props.onClose?.();
      }}
      visible={props.isOpen}
      placement={placement}
      hideOnClick={props.closeOnClick ?? true}
      interactive={true}
      interactiveDebounce={props.interactiveDebounce ?? theme.definition.popoverInteractiveDebounce ?? 75}
      interactiveBorder={props.interactiveBorder ?? theme.definition.popoverInteractiveBorder ?? 20}
      className={cxs({ outline: 'none' })}
      duration={animationDuration}
      content={
        <div
          ref={r => (props.autoFocus ?? true ? r?.focus() : {})}
          onClick={
            props.closeOnClickInside
              ? () => {
                  instance.current?.hide();
                }
              : undefined
          }
          className={cxs({
            maxWidth: props.maxContentWidth ? `${props.maxContentWidth}px` : undefined,
            maxHeight: props.maxContentHeight ? `${props.maxContentHeight}px` : undefined,
            overflowX: props.maxContentWidth ? 'auto' : undefined,
            overflowY: props.maxContentHeight ? 'auto' : undefined,
            ...(animated &&
              (props.animationDefaultStyles ?? {
                transition: `${animationDuration}ms all ease`,
              })),
            ...(animated && !visibleDelayed && animationHiddenStyles),
            ...(animated && visibleDelayed && animationDisplayStyles),
            ...props.contentCss,
          })}
          {...props.contentProps}
        >
          {props.content}
        </div>
      }
      {...props.tippyProps}
    >
      <div
        className={cxs({
          display: props.inline ?? true ? 'inline-block' : 'block',
          ...props.css,
        })}
        {...props.elementProps}
      >
        <ButtonGroupContext.Provider
          value={{ active: visible && props.trigger !== PopoverOpenTrigger.HoverReference, ...buttonContextProps }}
        >
          {props.children}
        </ButtonGroupContext.Provider>
      </div>
    </Tippy>
  );
});
