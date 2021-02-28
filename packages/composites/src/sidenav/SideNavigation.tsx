import * as React from 'react';
import cxs from 'cxs';
import {
  AnyElement,
  BackgroundColor,
  Icon,
  IconName,
  MenuHeader,
  MenuItem,
  MenuItemProps,
  RenderMaybeIcon,
  ToolTip,
  TooltipPlacement,
  useTheme,
} from '@blackmaker/core';

export interface SideNavigationItem extends MenuItemProps {}

export interface SideNavigationProps {
  items: Array<SideNavigationItem | JSX.Element | string>;
  bottomItems?: Array<SideNavigationItem | JSX.Element | string>;
  contentAfterItems?: AnyElement;
  isCollapsed: boolean;
  onChangeCollapsed: (isCollapsed: boolean) => void;
  title?: AnyElement;
  width?: number | string;
  background?: BackgroundColor | string;
}

const Item: React.FC<{
  item: SideNavigationItem | JSX.Element | string;
  collapsed: boolean;
}> = props => {
  if (props.collapsed && (props.item as JSX.Element).type === undefined && typeof props.item !== 'string') {
    const itemAsMenuItem = props.item as SideNavigationItem;
    console.log('Collapsed');
    return (
      <ToolTip content={itemAsMenuItem.text} placement={TooltipPlacement.Right}>
        <MenuItem
          {...itemAsMenuItem}
          minimal={!itemAsMenuItem.selected}
          iconRight={undefined}
          icon={undefined}
          text={undefined}
          subText={undefined}
          css={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '3em',
          }}
          elementProps={{
            'aria-label': typeof itemAsMenuItem.text === 'string' ? itemAsMenuItem.text : undefined,
          }}
          directContent={
            <RenderMaybeIcon icon={itemAsMenuItem.icon ?? IconName.FirstPage} iconProps={{ size: '1.5em' }} />
          }
        />
      </ToolTip>
    );
  } else {
    if ((props.item as JSX.Element).type !== undefined && !props.collapsed) {
      return props.item as JSX.Element;
    } else if (typeof props.item === 'string' && !props.collapsed) {
      return <MenuHeader>{props.item}</MenuHeader>;
    } else if (!props.collapsed) {
      const itemAsMenuItem = props.item as SideNavigationItem;
      return <MenuItem minimal={!itemAsMenuItem.selected} {...itemAsMenuItem} />;
    } else {
      return null;
    }
  }
};

export const SideNavigation: React.FC<SideNavigationProps> = props => {
  const theme = useTheme();
  return (
    <div
      className={cxs({
        width: props.isCollapsed ? '80px' : typeof props.width === 'number' ? `${props.width}px` : props.width,
        backgroundColor: theme.getBackgroundColor(props.background ?? BackgroundColor.Tertiary),
        height: '100%',
        padding: '.8em',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'auto',
        transition: '.1s width ease',
      })}
    >
      <div
        className={cxs({
          flexGrow: !props.contentAfterItems ? 1 : undefined,
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.items.map((item, index) => (
          <Item item={item} collapsed={props.isCollapsed} key={index} />
        ))}
      </div>

      {props.contentAfterItems && (
        <div
          className={cxs({
            flexGrow: 1,
          })}
        >
          {props.contentAfterItems}
        </div>
      )}

      <div
        className={cxs({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.bottomItems?.map((item, index) => (
          <Item item={item} collapsed={props.isCollapsed} key={index} />
        ))}
        <MenuItem
          elementProps={{
            'aria-label': props.isCollapsed ? 'Expand' : 'Collapse',
          }}
          iconRight={!props.isCollapsed ? IconName.ChevronLeft : undefined}
          text={!props.isCollapsed ? ' ' : undefined}
          directContent={props.isCollapsed ? <Icon name={IconName.ChevronRight} /> : undefined}
          css={props.isCollapsed ? { alignItems: 'center', justifyContent: 'center' } : undefined}
          minimal={true}
          onClick={() => props.onChangeCollapsed(!props.isCollapsed)}
        />
      </div>
    </div>
  );
};
