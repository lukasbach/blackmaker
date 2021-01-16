import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ButtonGroupContext, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import Tippy from '@tippyjs/react';
import Color from 'color';
import { useHotKey } from '@blackmaker/hotkeys/out/useHotKey';

export enum PopoverOpenTrigger {
  HoverReference,
  ClickReference,
  Manually,
}

export interface PopoverProps {
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
}

export const Popover: React.FC<PopoverProps> = props => {
  const theme = useTheme();
  const buttonContextProps = useContext(ButtonGroupContext) ?? {};
  const [isOpen, setIsOpen] = useState(props.isOpen ?? false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
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
        inertia={false}
        visible={isOpen}
        placement={props.placement ?? TooltipPlacement.Auto}
        onClickOutside={() => {
          if (props.trigger === PopoverOpenTrigger.ClickReference) {
            setIsOpen(false);
          }
        }}
        interactive={true}
        interactiveDebounce={0}
        interactiveBorder={30}
        offset={props.offset ?? [0, 0]}
        // animation={true}
        className={cxs({ outline: 'none' })}
        content={
          <div
            ref={r => (props.autoFocus ?? true ? r?.focus() : {})}
            className={cxs({
              paddingLeft: !props.noLeftPadding && '12px',
            })}
          >
            {props.content}
          </div>
        }
      >
        <span onClick={() => props.trigger === PopoverOpenTrigger.ClickReference && toggleIsOpen()}>
          <ButtonGroupContext.Provider
            value={{ active: isOpen && props.trigger !== PopoverOpenTrigger.HoverReference, ...buttonContextProps }}
          >
            {props.children}
          </ButtonGroupContext.Provider>
        </span>
      </Tippy>
    </div>
  );
};
