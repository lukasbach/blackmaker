import * as React from 'react';
import { HtmlElementProps, IconName, Intent, lighten, MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';

export interface TagProps extends HtmlElementProps {
  fill?: boolean;
  large?: boolean;
  small?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  round?: boolean;
  interactive?: boolean;
  onRemove?: () => any;
  icon?: MaybeIcon;
  rightIcon?: MaybeIcon;
  intent?: Intent;
  content?: string | JSX.Element;
}

export const Tag: React.FC<TagProps> = props => {
  const theme = useTheme();

  const backgroundColor =
    !props.minimal && !props.outlined
      ? theme.getColor(props.intent)
      : theme.colorWithAlpha(theme.getColor(props.intent), 0.2);

  return (
    <div
      className={cxs({
        display: 'inline-flex',
        backgroundColor: backgroundColor,
        color:
          !props.minimal && !props.outlined
            ? theme.getTextColorOnBrandColors(props.intent)
            : theme.getBrandTextColor(props.intent),
        border: !props.outlined ? 'none' : `1px solid ${theme.getColor(props.intent)}`,
        fontSize: props.small ? '.7em' : props.large ? '1.2em' : '.9em',
        verticalAlign: 'middle',
        margin: '2px',
        padding: '.2em .3em',
        height: '1.4em',
        alignItems: 'center',
        borderRadius: props.round ? '9999px' : theme.definition.borderRadiusSmall,
        transition: '.2s background-color ease',

        ...(props.interactive && {
          cursor: 'pointer',
          ':hover': {
            backgroundColor:
              !props.minimal && !props.outlined
                ? theme.getColorLighten(props.intent ?? Intent.Default, 0.1)
                : theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.3),
          },
          ':active': {
            transitionDuration: '.02s',
            backgroundColor:
              !props.minimal && !props.outlined
                ? theme.getColorLighten(props.intent ?? Intent.Default, 0.2)
                : theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.4),
          },
        }),

        ...props.css,
      })}
      {...props.elementProps}
    >
      <RenderMaybeIcon
        icon={props.icon}
        iconProps={{
          size: '18px',
          marginRight: true,
        }}
      />
      {props.children}
      {props.content}
      <RenderMaybeIcon
        icon={props.rightIcon}
        iconProps={{
          size: '18px',
          marginLeft: true,
        }}
      />
      {props.onRemove && (
        <button
          onClick={props.onRemove}
          className={cxs({
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '9999px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginLeft: '4px',
            outline: 'none',
            ':hover': {
              backgroundColor: lighten(backgroundColor, 0.2),
              color: theme.definition.textHightlightColor + ' !important',
            },
          })}
        >
          <RenderMaybeIcon
            icon={IconName.Close}
            iconProps={{
              size: '.9em',
              color:
                !props.minimal && !props.outlined
                  ? theme.getColorLighten(props.intent ?? Intent.Default, 0.7)
                  : theme.colorWithAlpha(theme.getColor(props.intent), 0.85),
            }}
          />
        </button>
      )}
    </div>
  );
};
