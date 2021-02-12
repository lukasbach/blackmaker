import * as React from 'react';
import { Icon, IconName, TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import { MenuItem, MenuItemProps } from '../menu/MenuItem';
import { useState } from 'react';
import { Popover, PopoverOpenTrigger } from '../overlays/Popover';
import { Menu } from '../menu/Menu';

export interface BreadCrumbArrowProps {
  menu?: MenuItemProps[];
}

export const BreadCrumbArrow: React.FC<BreadCrumbArrowProps> = props => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const Element = props.menu ? 'button' : 'div';

  const hoverBackground = theme.isDark ? 'rgba(255, 255, 255, .15)' : 'rgba(0, 0, 0, .15)';

  const content = (
    <Element
      className={cxs({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1em',
        margin: '2px',
        width: '1.4em',
        height: '1.4em',
        border: 'none',
        outline: 'none',
        verticalAlign: 'middle',
        borderRadius: '9999px',
        backgroundColor: expanded ? hoverBackground : 'rgba(0, 0, 0, 0)',
        ...(props.menu
          ? {
              cursor: 'pointer',
              transition: '.1s background-color ease',
              ':hover': {
                backgroundColor: hoverBackground,
              },
            }
          : {}),
      })}
    >
      <Icon name={expanded ? IconName.ExpandMore : IconName.ChevronRight} color={theme.definition.textMutedColor} />
    </Element>
  );

  return props.menu ? (
    <Popover
      trigger={PopoverOpenTrigger.ClickReference}
      placement={TooltipPlacement.BottomStart}
      onOpen={() => setExpanded(true)}
      onClose={() => setExpanded(false)}
      content={
        <Menu>
          {props.menu.map((child, idx) => (
            <MenuItem {...child} key={idx} />
          ))}
        </Menu>
      }
    >
      {content}
    </Popover>
  ) : (
    content
  );
};
