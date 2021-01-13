import * as React from 'react';
import { Falsy, HtmlElementProps, Intent, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Alignment } from '../common/Alignment';
import { IconName, Icon } from '..';
import { Property } from 'csstype';
import { Spinner } from '../spinner/Spinner';
import { useContext } from 'react';
import { ButtonGroupContext } from './ButtonGroup';

export interface ButtonProps extends HtmlElementProps<HTMLButtonElement> {
  asAnchor?: boolean;
  textAlignment?: Alignment;
  disabled?: boolean;
  fill?: boolean;
  icon?: IconName | JSX.Element | Falsy;
  rightIcon?: IconName | JSX.Element | Falsy;
  intent?: Intent;
  large?: boolean;
  small?: boolean;
  loading?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  onClick?: () => any;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = componentProps => {
  const theme = useTheme();
  const ctxProps = useContext(ButtonGroupContext) ?? {};
  const props = { ...ctxProps, ...componentProps };
  const grouped = !!props.grouped;

  const Element = props.asAnchor ? 'a' : 'button';
  const hasContent = !!props.children;

  return (
    <Element
      onClick={props.onClick}
      href={props.href}
      target={props.target}
      className={cxs({
        backgroundColor: !props.minimal && !props.outlined ? theme.getColor(props.intent) : 'transparent',
        borderRadius: !grouped && theme.definition.borderRadiusSmall,
        border: !props.outlined ? 'none' : `1px solid ${theme.getColor(props.intent)}`,
        boxShadow:
          !props.minimal &&
          !props.outlined &&
          `0 2px 0 0px ${theme.getColorDarken(props.intent ?? Intent.Default, 0.4)}`,
        color:
          !props.minimal && !props.outlined
            ? theme.definition.textHightlightColor
            : theme.getBrandTextColor(props.intent),
        fontSize: props.small ? '.7em' : props.large ? '1em' : '.8em',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '.1s background-color ease',
        outline: 'none',
        textAlign: props.textAlignment as Property.TextAlign,
        display: props.fill ? 'flex' : 'inline-flex',
        alignItems: 'center',
        width: props.fill ? '100%' : undefined,
        margin: !grouped ? '2px 4px' : '2px 0 0 1px',
        verticalAlign: 'middle',
        height: props.small ? '2.2em' : '2.8em',
        padding: props.large
          ? hasContent
            ? '10px 14px'
            : '10px'
          : props.small
          ? hasContent
            ? '4px 10px'
            : '4px'
          : hasContent
          ? '8px 16px'
          : '8px',
        ':hover': {
          backgroundColor:
            !props.minimal && !props.outlined
              ? theme.getColorLighten(props.intent ?? Intent.Default, 0.07)
              : theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2),
        },
        ':active': {
          transitionDuration: '.02s',
          backgroundColor:
            !props.minimal && !props.outlined
              ? theme.getColorLighten(props.intent, 0.11)
              : theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.3),
        },
        ...(grouped && {
          ':first-child': {
            borderBottomLeftRadius: theme.definition.borderRadiusSmall,
            borderTopLeftRadius: theme.definition.borderRadiusSmall,
          },
          ':last-child': {
            borderBottomRightRadius: theme.definition.borderRadiusSmall,
            borderTopRightRadius: theme.definition.borderRadiusSmall,
          },
        }),
        ...props.css,
      })}
      {...(props.elementProps as any)}
    >
      {!props.loading && (
        <>
          <RenderMaybeIcon
            icon={props.icon}
            iconProps={{
              marginRight: hasContent,
              css: {
                marginLeft: hasContent && '-.3em',
              },
            }}
          />
          {props.children}
          <RenderMaybeIcon
            icon={props.rightIcon}
            iconProps={{
              marginLeft: hasContent,
              css: {
                marginRight: hasContent && '-.3em',
              },
            }}
          />
        </>
      )}
      {props.loading && <Spinner />}
    </Element>
  );
};
