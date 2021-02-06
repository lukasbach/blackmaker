import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { ButtonGroupContext, HtmlElementProps, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import Tippy, { TippyProps } from '@tippyjs/react';
import { useHotKey } from '@blackmaker/hotkeys/out/useHotKey';
import { Instance } from 'tippy.js';

export enum PopoverOpenTrigger {
  HoverReference,
  ClickReference,
  Manually,
}

export interface PopoverProps extends HtmlElementProps {
  isOpen?: boolean;
  trigger?: PopoverOpenTrigger;
  placement?: TooltipPlacement;
  content: React.ReactNode | string;
  noLeftPadding?: boolean;
  autoFocus?: boolean;
  closeOnEscape?: boolean;
  closeOnClick?: boolean;
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
}

export const Popover: React.FC<PopoverProps> = props => {
  const theme = useTheme();
  const instance = useRef<Instance>();
  const buttonContextProps = useContext(ButtonGroupContext) ?? {};
  const [visible, setVisible] = useState(false);
  const [visibleDelayed, setVisibleDelayed] = useState(false);
  useEffect(() => setVisibleDelayed(visible), [visible]);
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

  const animated = props.animated ?? true;
  const animationDuration = props.animationDuration ?? 80;
  const animationHiddenStyles = props.animationHiddenStyles ?? {
    opacity: 0,
    transform: (() => {
      switch (props.placement) {
        case TooltipPlacement.AutoStart:
          return 'scale(.95)';
        case TooltipPlacement.Auto:
          return 'scale(.95)';
        case TooltipPlacement.AutoEnd:
          return 'scale(.95)';
        case TooltipPlacement.TopStart:
          return 'translateY(5px) translateX(-5px) scale(.95)';
        case TooltipPlacement.Top:
          return 'translateY(5px) scale(.95)';
        case TooltipPlacement.TopEnd:
          return 'translateY(5px) translateX(5px) scale(.95)';
        case TooltipPlacement.RightStart:
          return 'translateY(-5px) translateX(-5px) scale(.95)';
        case TooltipPlacement.Right:
          return 'translateX(-5px) scale(.95)';
        case TooltipPlacement.RightEnd:
          return 'translateY(5px) translateX(-5px) scale(.95)';
        case TooltipPlacement.BottomEnd:
          return 'translateY(-5px) translateX(5px) scale(.95)';
        case TooltipPlacement.Bottom:
          return 'translateY(-5px) scale(.95)';
        case TooltipPlacement.BottomStart:
          return 'translateY(-5px) translateX(-5px) scale(.95)';
        case TooltipPlacement.LeftEnd:
          return 'translateY(5px) translateX(5px) scale(.95)';
        case TooltipPlacement.Left:
          return 'translateX(5px) scale(.95)';
        case TooltipPlacement.LeftStart:
          return 'translateY(-5px) translateX(5px) scale(.95)';
      }
    })(),
  };
  const animationDisplayStyles = props.animationDisplayStyles ?? {
    opacity: 1,
    transform: 'none',
  };

  return (
    <Tippy
      onMount={i => (instance.current = i)}
      arrow={false}
      trigger={(() => {
        switch (props.trigger) {
          case PopoverOpenTrigger.Manually:
            return 'manual';
          case PopoverOpenTrigger.ClickReference:
            return 'click';
          case PopoverOpenTrigger.HoverReference:
          default:
            return 'mouseenter focus';
        }
      })()}
      onShow={instance => {
        setVisible(true);
        props.tippyProps?.onShow?.(instance);
      }}
      onHide={instance => {
        setVisible(false);
        props.tippyProps?.onHide?.(instance);
      }}
      placement={props.placement ?? TooltipPlacement.Bottom}
      hideOnClick={props.closeOnClick}
      interactive={true}
      interactiveDebounce={props.interactiveDebounce ?? theme.definition.popoverInteractiveDebounce ?? 75}
      interactiveBorder={props.interactiveBorder ?? theme.definition.popoverInteractiveBorder ?? 20}
      className={cxs({ outline: 'none' })}
      duration={animationDuration}
      content={
        <div
          ref={r => (props.autoFocus ?? true ? r?.focus() : {})}
          className={cxs({
            ...(animated &&
              (props.animationDefaultStyles ?? {
                transition: `${animationDuration}ms all ease`,
              })),
            ...(animated && !visibleDelayed && animationHiddenStyles),
            ...(animated && visibleDelayed && animationDisplayStyles),
          })}
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
};
