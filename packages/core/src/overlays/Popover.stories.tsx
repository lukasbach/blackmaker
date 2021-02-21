import React from 'react';
import { Meta } from '@storybook/react';
import { Button, darkTheme, IconName, ThemeProvider, TooltipPlacement } from '..';
import { Popover, PopoverOpenTrigger, PopoverProps } from './Popover';
import { MenuItem } from '../menu/MenuItem';
import { Menu } from '../menu/Menu';
import { CardContainer } from '../card/CardContainer';
import { CardArea } from '../card/CardArea';
import { Overlay } from './Overlay';

export default {
  title: 'Core/Overlays/Popover',
  component: Popover,
} as Meta;

export const SimplePopover: React.FC = () => (
  <div>
    <Popover content={<div>Hello on Hover</div>} trigger={PopoverOpenTrigger.HoverReference} inline={true}>
      <Button>Hover over me!</Button>
    </Popover>
  </div>
);

export const PopoverWithCard: React.FC = () => (
  <div>
    <Popover
      inline={true}
      placement={TooltipPlacement.BottomStart}
      content={
        <CardContainer shadow={1}>
          <CardArea>Card Content</CardArea>
          <CardArea muted={true}>Footer</CardArea>
        </CardContainer>
      }
      trigger={PopoverOpenTrigger.ClickReference}
    >
      <Button>Click on me!</Button>
    </Popover>
  </div>
);

export const PopoverMenu: React.FC<Partial<PopoverProps>> = props => {
  return (
    <Menu>
      <MenuItem text="Hello World!" />
      <MenuItem text="Hello World!" />
      <Popover
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
        content={
          <Menu>
            <MenuItem text="Hello World!" />
            <Popover
              trigger={PopoverOpenTrigger.HoverReference}
              placement={TooltipPlacement.RightStart}
              content={
                <Menu>
                  <MenuItem text="Hello World!" />
                  <MenuItem text="Hello World!" />
                </Menu>
              }
            >
              <MenuItem text="Hello World!" iconRight={IconName.ChevronRight} />
            </Popover>
          </Menu>
        }
      >
        <MenuItem text="Hello World!" iconRight={IconName.ChevronRight} />
      </Popover>
    </Menu>
  );
};

export const PopoverMenuClickTrigger: React.FC<Partial<PopoverProps>> = props => {
  return (
    <Menu>
      <MenuItem text="Hello World!" />
      <MenuItem text="Hello World!" />
      <Popover
        trigger={PopoverOpenTrigger.ClickReference}
        placement={TooltipPlacement.RightStart}
        content={
          <Menu>
            <MenuItem text="Hello World!" />
            <Popover
              trigger={PopoverOpenTrigger.ClickReference}
              placement={TooltipPlacement.RightStart}
              content={
                <Menu>
                  <MenuItem text="Hello World!" />
                  <MenuItem text="Hello World!" />
                </Menu>
              }
            >
              <MenuItem text="Hello World!" iconRight={IconName.ChevronRight} />
            </Popover>
          </Menu>
        }
      >
        <MenuItem text="Hello World!" iconRight={IconName.ChevronRight} />
      </Popover>
    </Menu>
  );
};

export const DeeplyNested: React.FC<Partial<PopoverProps>> = props => {
  return (
    <Menu>
      <MenuItem text="Hello World!" />
      <MenuItem text="Hello World!" />
      <Popover
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
        content={
          <Menu>
            <Popover
              trigger={PopoverOpenTrigger.HoverReference}
              placement={TooltipPlacement.RightStart}
              content={
                <Menu>
                  <Popover
                    trigger={PopoverOpenTrigger.HoverReference}
                    placement={TooltipPlacement.RightStart}
                    content={
                      <Menu>
                        <Popover
                          trigger={PopoverOpenTrigger.HoverReference}
                          placement={TooltipPlacement.RightStart}
                          content={
                            <Menu>
                              <Popover
                                trigger={PopoverOpenTrigger.HoverReference}
                                placement={TooltipPlacement.RightStart}
                                content={
                                  <Menu>
                                    <Popover
                                      trigger={PopoverOpenTrigger.HoverReference}
                                      placement={TooltipPlacement.RightStart}
                                      content={
                                        <Menu>
                                          <Popover
                                            trigger={PopoverOpenTrigger.HoverReference}
                                            placement={TooltipPlacement.RightStart}
                                            content={
                                              <Menu>
                                                <Popover
                                                  trigger={PopoverOpenTrigger.HoverReference}
                                                  placement={TooltipPlacement.RightStart}
                                                  content={
                                                    <Menu>
                                                      <Popover
                                                        trigger={PopoverOpenTrigger.HoverReference}
                                                        placement={TooltipPlacement.RightStart}
                                                        content={<div>Bonjour!</div>}
                                                      >
                                                        <MenuItem text="Recurse me!" />
                                                      </Popover>
                                                    </Menu>
                                                  }
                                                >
                                                  <MenuItem text="Recurse me!" />
                                                </Popover>
                                              </Menu>
                                            }
                                          >
                                            <MenuItem text="Recurse me!" />
                                          </Popover>
                                        </Menu>
                                      }
                                    >
                                      <MenuItem text="Recurse me!" />
                                    </Popover>
                                  </Menu>
                                }
                              >
                                <MenuItem text="Recurse me!" />
                              </Popover>
                            </Menu>
                          }
                        >
                          <MenuItem text="Recurse me!" />
                        </Popover>
                      </Menu>
                    }
                  >
                    <MenuItem text="Recurse me!" />
                  </Popover>
                </Menu>
              }
            >
              <MenuItem text="Recurse me!" />
            </Popover>
          </Menu>
        }
      >
        <MenuItem iconRight={IconName.ChevronRight} text="Recurse me!" />
      </Popover>
    </Menu>
  );
};

export const PopoverInteractiveBorderDefinedInTheme: React.FC = () => (
  <ThemeProvider
    themeDefinition={{
      ...darkTheme,
      popoverInteractiveBorder: 100,
    }}
  >
    <Popover content={<div>I've got a 100px interactive border</div>}>
      <Button>Hover over me!</Button>
    </Popover>
  </ThemeProvider>
);

export const PopoverInteractiveDebounceDefinedInTheme: React.FC = () => (
  <ThemeProvider
    themeDefinition={{
      ...darkTheme,
      popoverInteractiveDebounce: 2000,
    }}
  >
    <Popover content={<div>I've got a 2s interactive debounce</div>}>
      <Button>Hover over me!</Button>
    </Popover>
  </ThemeProvider>
);
