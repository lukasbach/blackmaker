import * as React from 'react';
import cxs from 'cxs';
import {
  AnyElement,
  BackgroundColor,
  HtmlElementProps,
  Icon,
  IconName,
  Intent,
  MenuHeader,
  MenuItem,
  MenuItemProps,
  RenderMaybeIcon,
  ToolTip,
  TooltipPlacement,
  useTheme,
} from '@blackmaker/core';

export interface SideNavigationItem extends MenuItemProps {}

export interface SideNavigationProps extends HtmlElementProps<HTMLDivElement> {
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
    return (
      <ToolTip content={itemAsMenuItem.text} placement={TooltipPlacement.Right}>
        <MenuItem
          {...itemAsMenuItem}
          minimal={!itemAsMenuItem.selected}
          intent={!itemAsMenuItem.selected ? Intent.Default : undefined}
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
      return (
        <MenuItem
          minimal={!itemAsMenuItem.selected}
          intent={!itemAsMenuItem.selected ? Intent.Default : undefined}
          {...itemAsMenuItem}
        />
      );
    } else {
      return null;
    }
  }
};

export const SideNavigation: React.FC<SideNavigationProps> = props => {
  const theme = useTheme();
  const width = props.isCollapsed ? '5em' : typeof props.width === 'number' ? `${props.width}px` : props.width;
  return (
    <nav
      className={cxs({
        width,
        minWidth: width,
        backgroundColor: theme.getBackgroundColor(props.background ?? BackgroundColor.Secondary),
        height: '100%',
        padding: '.8em',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'auto',
        transition: '.1s width ease',
        alignSelf: 'stretch',
        ...props.css,
      })}
      {...props.elementProps}
    >
      <div
        className={cxs({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        {props.items.map((item, index) => (
          <Item item={item} collapsed={props.isCollapsed} key={index} />
        ))}
        {!props.isCollapsed && props.contentAfterItems}
      </div>

      <div
        className={cxs({
          // I'm a grow-er, not a show-er!
          flexGrow: 1,
        })}
      />

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
            'aria-label': props.isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar',
          }}
          iconRight={!props.isCollapsed ? IconName.ChevronLeft : undefined}
          text={!props.isCollapsed ? ' ' : undefined}
          directContent={props.isCollapsed ? <Icon name={IconName.ChevronRight} /> : undefined}
          css={props.isCollapsed ? { alignItems: 'center', justifyContent: 'center' } : undefined}
          minimal={true}
          intent={Intent.Default}
          onClick={() => props.onChangeCollapsed(!props.isCollapsed)}
        />
      </div>
    </nav>
  );
};
