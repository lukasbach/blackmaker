import * as React from 'react';
import { Falsy, IconName, Intent, RenderMaybeIcon, TooltipPlacement, useTheme } from '..';
import cxs, { CSSObject } from 'cxs';
import { Popover, PopoverOpenTrigger } from '../overlays/Popover';
import { Menu } from './Menu';
import { MaybeTruncate } from '../common/MaybeTruncate';

export interface MenuItemProps {
  intent?: Intent;
  icon?: IconName | JSX.Element | Falsy;
  iconRight?: IconName | JSX.Element | Falsy;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  text?: string | JSX.Element;
  subText?: string | JSX.Element;
  dontTruncate?: boolean;
}

const truncateCode: CSSObject = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
};

export const MenuItem: React.FC<MenuItemProps> = props => {
  const theme = useTheme();

  const itemContent = (
    <div
      onClick={!props.disabled && !props.selected ? props.onClick : undefined}
      className={cxs({
        padding: '8px 12px',
        marginBottom: '2px',
        borderRadius: theme.definition.borderRadiusSmall,
        cursor: props.disabled ? 'not-allowed' : !props.selected ? 'pointer' : undefined,
        transition: '.05s background-color ease',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        color: theme.getBrandTextColor(props.intent),
        ...(props.selected
          ? {
              backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
              color: theme.getTextColorOnBrandColors(props.intent),
            }
          : !props.disabled
          ? {
              ':hover': {
                backgroundColor: theme.getColor(props.intent ?? Intent.Primary),
                color: theme.getTextColorOnBrandColors(props.intent),
              },
              ':active': {
                backgroundColor: theme.getColorLighten(props.intent ?? Intent.Primary, 0.15),
                color: theme.getTextColorOnBrandColors(props.intent),
              },
            }
          : {
              color: theme.definition.textMutedColor,
            }),
      })}
    >
      <RenderMaybeIcon
        icon={props.icon}
        iconProps={{
          marginRight: true,
          css: {
            marginLeft: '-.3em',
          },
        }}
      />
      <div
        className={cxs({
          flexGrow: 1,
          marginRight: '1em',
          maxWidth: '100%',
        })}
      >
        <div className={!props.dontTruncate && cxs(truncateCode)}>{props.text}</div>
        {props.subText && (
          <div
            className={cxs({
              ...(!props.dontTruncate && truncateCode),
              color: theme.definition.textMutedColor, // TODO is not overwritten by parent hover and looks bad in bright ui
              fontSize: '.8em',
            })}
          >
            {props.subText}
          </div>
        )}
      </div>
      <RenderMaybeIcon
        icon={props.iconRight}
        iconProps={{
          marginLeft: true,
          css: {
            marginRight: '-.3em',
          },
        }}
      />
    </div>
  );

  if (props.children) {
    return (
      <Popover
        content={<Menu>{props.children}</Menu>}
        trigger={PopoverOpenTrigger.HoverReference}
        placement={TooltipPlacement.RightStart}
      >
        {itemContent}
      </Popover>
    );
  } else {
    return itemContent;
  }
};
