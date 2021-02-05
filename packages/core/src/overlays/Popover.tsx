import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ButtonGroupContext, HtmlElementProps, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import Tippy from '@tippyjs/react';
import Color from 'color';
import { useHotKey } from '@blackmaker/hotkeys/out/useHotKey';

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
  offset?: [number, number];
  noLeftPadding?: boolean;
  autoFocus?: boolean;
  closeOnEscape?: boolean;
  inline?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
  animated?: boolean;
  animationHiddenStyles?: cxs.CSSObject;
  animationDisplayStyles?: cxs.CSSObject;
  animationDefaultStyles?: cxs.CSSObject;
  animationDuration?: number,
}

export const Popover: React.FC<PopoverProps> = props => {
  const theme = useTheme();
  const buttonContextProps = useContext(ButtonGroupContext) ?? {};
  const [isOpen, setIsOpen] = useState(props.isOpen ?? false);
  const [isOpenDelayed, setIsOpenDelayed] = useState(isOpen);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  useEffect(() => setIsOpenDelayed(isOpen), [isOpen]);
  useEffect(() => setIsOpen(props.isOpen), [props.isOpen]);
  useEffect(() => (isOpen ? props.onOpen?.() : props.onClose?.()), [isOpen]);
  useHotKey(
    {
      global: true,
      combination: 'esc',
      id: 'close',
    },
    () => {
      if (props.closeOnEscape ?? true) {
        setIsOpen(false);
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
    })()
  };
  const animationDisplayStyles = props.animationDisplayStyles ?? {
    opacity: 1,
    transform: 'none'
  };

  return (
    <div
      onMouseEnter={() => props.trigger === PopoverOpenTrigger.HoverReference && setIsOpen(true)}
      onMouseLeave={() => props.trigger === PopoverOpenTrigger.HoverReference && setIsOpen(false)}
      className={cxs({
        display: props.inline && 'inline-block',
        '& .tippy-svg-arrow path': {
          fill: new Color(theme.definition.menuBackgroundColor).darken(0.2).toString(),
        },
      })}
    >
      <Tippy
        arrow={false}
        // trigger={'manual'}
        // hideOnClick={true}
        inertia={true}
        visible={isOpen}
        placement={props.placement ?? TooltipPlacement.Bottom}
        onClickOutside={() => {
          if (props.trigger === PopoverOpenTrigger.ClickReference) {
            setIsOpen(false);
          }
        }}
        interactive={true}
        interactiveDebounce={75}
        interactiveBorder={30}
        offset={props.offset ?? [5, 5]}
        // animation={true}
        className={cxs({ outline: 'none' })}
        duration={animationDuration}
        content={
          <div
            ref={r => (props.autoFocus ?? true ? r?.focus() : {})}
            className={cxs({
              // paddingLeft: !props.noLeftPadding && '12px',
              ...(animated && (props.animationDefaultStyles ?? {
                transition: `${animationDuration}ms all ease`,
              })),
              ...(animated && animationHiddenStyles),
              ...(animated && isOpenDelayed ? animationDisplayStyles : animationHiddenStyles)
            })}
          >
            {props.content}
          </div>
        }
      >
        <div onClick={() => props.trigger === PopoverOpenTrigger.ClickReference && toggleIsOpen()}>
          <ButtonGroupContext.Provider
            value={{ active: isOpen && props.trigger !== PopoverOpenTrigger.HoverReference, ...buttonContextProps }}
          >
            {props.children}
          </ButtonGroupContext.Provider>
        </div>
      </Tippy>
    </div>
  );
};
