import * as React from 'react';
import { Falsy, Intent, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Alignment } from '../common/Alignment';
import { IconName, Icon } from '..';
import { Property } from 'csstype';
import { Spinner } from '../spinner/Spinner';

export interface ButtonProps {
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

export const Button: React.FC<ButtonProps> = props => {
  const theme = useTheme();

  const Element = props.asAnchor ? 'a' : 'button';
  const hasContent = !!props.children;

  return (
    <Element
      onClick={props.onClick}
      href={props.href}
      target={props.target}
      className={ cxs({
        backgroundColor: !props.minimal && !props.outlined ? theme.getColor(props.intent) : 'transparent',
        borderRadius: theme.definition.borderRadiusSmall,
        border: !props.outlined ? 'none' : `1px solid ${theme.getColor(props.intent)}`,
        boxShadow: !props.minimal && !props.outlined && `0 2px 0 0px ${theme.getColorDarken(props.intent ?? Intent.Default, .4)}`,
        color: !props.minimal && !props.outlined ? theme.definition.textHightlightColor : theme.getBrandTextColor(props.intent),
        fontSize: props.small ? '.7em' : props.large ? '1em' : '.8em',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: '.1s background-color ease',
        outline: 'none',
        textAlign: props.textAlignment as Property.TextAlign,
        display: props.fill ? 'flex' : 'inline-flex',
        alignItems: 'center',
        width: props.fill ? '100%' : undefined,
        margin: '2px 4px',
        padding: (
          props.large ? (
            hasContent  ? '10px 14px' : '10px'
          ) : props.small ? (
            hasContent  ? '6px 12px' : '6px'
          ) : (
            hasContent  ? '8px 16px' : '8px'
          )
        ),
        ':hover': {
          backgroundColor: !props.minimal && !props.outlined ? (
            theme.getColorLighten(props.intent ?? Intent.Default, .07)
          ) : (
            theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), .2)
          ),
        },
        ':active': {
          transitionDuration: '.02s',
          backgroundColor: !props.minimal && !props.outlined ? (
            theme.getColorLighten(props.intent, .11)
          ) : (
            theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), .3)
          ),
        },
      }) }
    >
      { !props.loading && (
        <>
          <RenderMaybeIcon
            icon={props.icon}
            iconProps={{
              marginRight: hasContent,
              css: {
                marginLeft: hasContent && '-.3em'
              }
            }}
          />
          { props.children }
          <RenderMaybeIcon
            icon={props.rightIcon}
            iconProps={{
              marginLeft: hasContent,
              css: {
                marginRight: hasContent && '-.3em'
              }
            }}
          />
        </>
      ) }
      { props.loading && (
        <Spinner />
      )}
    </Element>
  );
};
