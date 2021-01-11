import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import Tippy from '@tippyjs/react';
import { TooltipPlacement } from '../common';
import Color from 'color';
import { useEffect, useState } from 'react';
import { Overlay } from './Overlay';

export enum PopoverOpenTrigger {
  HoverReference,
  ClickReference,
  Manually,
}

export interface PopoverProps {
  isOpen?: boolean;
  trigger?: PopoverOpenTrigger;
  placement?: TooltipPlacement;
  padded?: boolean;
  content: React.ReactNode;
  offset?: [number, number];
  noLeftPadding?: boolean;
}

export const Popover: React.FC<PopoverProps> = props => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  useEffect(() => setIsOpen(props.isOpen), [props.isOpen]);

  return (
    <div
      onMouseEnter={() => props.trigger === PopoverOpenTrigger.HoverReference && setIsOpen(true)}
      onMouseLeave={() => props.trigger === PopoverOpenTrigger.HoverReference && setIsOpen(false)}
      className={cxs({
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
        placement={props.placement}
        onClickOutside={() => props.trigger === PopoverOpenTrigger.ClickReference && setIsOpen(false)}
        interactive={true}
        interactiveDebounce={0}
        interactiveBorder={30}
        offset={props.offset ?? [5, 0]}
        animation={true}
        className={cxs({ outline: 'none' })}
        content={
          <div
            className={cxs({
              paddingLeft: !props.noLeftPadding && '12px',
            })}
          >
            {props.content}
          </div>
        }
      >
        <span onClick={() => props.trigger === PopoverOpenTrigger.ClickReference && toggleIsOpen()}>
          {/*<ButtonPropsContext.Provider value={{ active: isOpen }}>*/}
          {props.children}
          {/*</ButtonPropsContext.Provider>*/}
        </span>
      </Tippy>
    </div>
  );
};
