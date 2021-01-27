import React from 'react';
import { Meta } from '@storybook/react';
import { brightTheme, darkTheme, IconName, TooltipPlacement } from '..';
import { Popover, PopoverOpenTrigger, PopoverProps } from './Popover';
import { MenuItem } from '../menu/MenuItem';
import { Menu } from '../menu/Menu';
import { Button } from '../button/Button';
import { ContextMenuManager } from './ContextMenuManager';
import { useContextMenu } from './useContextMenu';
import cxs from 'cxs';

export default {
  title: 'Core/Overlays/ContextMenu',
} as Meta;

const MenuExample = (props: { text: string }) => (
  <Menu>
    <MenuItem text={props.text} />
    <MenuItem text={props.text} />
    <MenuItem iconRight={IconName.ChevronRight} text={props.text}>
      <MenuItem text={props.text} />
      <MenuItem text={props.text} />
    </MenuItem>
  </Menu>
);

export const ContextMenuImperative: React.FC = props => {
  return (
    <div>
      <Button onClick={() => ContextMenuManager.show(<MenuExample text="Hello World" />, [500, 500], darkTheme)}>
        Open at 500, 500
      </Button>
      <Button onClick={() => ContextMenuManager.show(<MenuExample text="Hello World" />, [200, 500], darkTheme)}>
        Open at 200, 500
      </Button>
      <Button onClick={() => ContextMenuManager.hide()}>Hide</Button>
    </div>
  );
};

export const ContextMenuHook: React.FC = () => {
  const { contextMenuProps: contextMenuPropsInner } = useContextMenu(<MenuExample text="Inner Context Menu" />);
  const { contextMenuProps: contextMenuPropsOuter } = useContextMenu(<MenuExample text="Outer Context Menu" />);

  return (
    <div
      className={cxs({
        width: '400px',
        height: '300px',
        border: '2px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
      {...contextMenuPropsOuter}
    >
      <div
        className={cxs({
          width: '50px',
          height: '50px',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, .1)',
        })}
        {...contextMenuPropsInner}
      >
        Right click!
      </div>
    </div>
  );
};
