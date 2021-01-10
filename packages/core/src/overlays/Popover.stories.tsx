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
      <MenuItem>
        Hello World
      </MenuItem>
      <MenuItem>
        Hello World
      </MenuItem>
      <Popover
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
        content={(
          <Menu>
            <MenuItem>
              Hello World
            </MenuItem>
            <Popover
              trigger={PopoverOpenTrigger.HoverReference}
              placement={TooltipPlacement.RightStart}
              content={(
                <Menu>
                  <MenuItem>
                    Hello World
                  </MenuItem>
                  <MenuItem>
                    Hello World
                  </MenuItem>
                </Menu>
              )}
            >
              <MenuItem iconRight={IconName.ChevronRight}>
                Hello World
              </MenuItem>
            </Popover>
          </Menu>
        )}
      >
        <MenuItem iconRight={IconName.ChevronRight}>
          Hello World
        </MenuItem>
      </Popover>
    </Menu>
  );
}

export const PopoverMenuClickTrigger: React.FC<Partial<PopoverProps>> = props => {
  return (
    <Menu>
      <MenuItem>
        Hello World
      </MenuItem>
      <MenuItem>
        Hello World
      </MenuItem>
      <Popover
        trigger={PopoverOpenTrigger.ClickReference}
        placement={TooltipPlacement.RightStart}
        content={(
          <Menu>
            <MenuItem>
              Hello World
            </MenuItem>
            <Popover
              trigger={PopoverOpenTrigger.ClickReference}
              placement={TooltipPlacement.RightStart}
              content={(
                <Menu>
                  <MenuItem>
                    Hello World
                  </MenuItem>
                  <MenuItem>
                    Hello World
                  </MenuItem>
                </Menu>
              )}
            >
              <MenuItem iconRight={IconName.ChevronRight}>
                Hello World
              </MenuItem>
            </Popover>
          </Menu>
        )}
      >
        <MenuItem iconRight={IconName.ChevronRight}>
          Hello World
        </MenuItem>
      </Popover>
    </Menu>
  );
}

export const DeeplyNested: React.FC<Partial<PopoverProps>> = props => {
  return (
    <Menu>
      <MenuItem>
        Hello World
      </MenuItem>
      <MenuItem>
        Hello World
      </MenuItem>
      <Popover
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
        content={(
          <Menu>
            <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
              <Menu>
                <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                  <Menu>
                    <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                      <Menu>
                        <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                          <Menu>
                            <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                              <Menu>
                                <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                                  <Menu>
                                    <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                                      <Menu>
                                        <Popover trigger={PopoverOpenTrigger.HoverReference} placement={TooltipPlacement.RightStart} content={(
                                          <div>Bonjour!</div>
                                        )}><MenuItem>Recurse me!</MenuItem></Popover>
                                      </Menu>
                                    )}><MenuItem>Recurse me!</MenuItem></Popover>
                                  </Menu>
                                )}><MenuItem>Recurse me!</MenuItem></Popover>
                              </Menu>
                            )}><MenuItem>Recurse me!</MenuItem></Popover>
                          </Menu>
                        )}><MenuItem>Recurse me!</MenuItem></Popover>
                      </Menu>
                    )}><MenuItem>Recurse me!</MenuItem></Popover>
                  </Menu>
                )}><MenuItem>Recurse me!</MenuItem></Popover>
              </Menu>
            )}><MenuItem>Recurse me!</MenuItem></Popover>
          </Menu>
        )}
      >
        <MenuItem iconRight={IconName.ChevronRight}>
          Recurse me!
        </MenuItem>
      </Popover>
    </Menu>
  );
}
