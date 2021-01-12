import React from 'react';
import { Meta } from '@storybook/react';
import { IconName, TooltipPlacement } from '..';
import { Popover, PopoverOpenTrigger, PopoverProps } from './Popover';
import { MenuItem } from '../menu/MenuItem';
import { Menu } from '../menu/Menu';

export default {
  title: 'Core/Overlays/Popover',
  component: Popover,
} as Meta;

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
              <MenuItem text="Hello World!" iconRight={IconName.ChevronRight}/>
            </Popover>
          </Menu>
        }
      >
        <MenuItem text="Hello World!" iconRight={IconName.ChevronRight}/>
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
              <MenuItem text="Hello World!" iconRight={IconName.ChevronRight}/>
            </Popover>
          </Menu>
        }
      >
        <MenuItem text="Hello World!" iconRight={IconName.ChevronRight}/>
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
        <MenuItem iconRight={IconName.ChevronRight} text="Recurse me!"/>
      </Popover>
    </Menu>
  );
};
