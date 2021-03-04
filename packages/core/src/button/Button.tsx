import * as React from 'react';
import { darken, Falsy, HtmlElementProps, Intent, lighten, MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Alignment } from '../common/Alignment';
import { Property } from 'csstype';
import { Spinner } from '../spinner/Spinner';
import { useContext, useEffect } from 'react';
import { ButtonGroupContext } from './ButtonGroup';
import Color from 'color';
import { MaybeFocusRing } from '../accessibility/MaybeFocusRing';

export interface ButtonProps extends HtmlElementProps<HTMLButtonElement> {
  asAnchor?: boolean;
  textAlignment?: Alignment;
  disabled?: boolean;
  fill?: boolean;
  icon?: MaybeIcon;
  rightIcon?: MaybeIcon;
  intent?: Intent;
  large?: boolean;
  small?: boolean;
  loading?: boolean;
  minimal?: boolean;
  outlined?: boolean;
  onClick?: () => any;
  active?: boolean;
  type?: 'submit' | 'reset' | 'button';
  href?: string;
  target?: string;
  text?: string | JSX.Element;
  margin?: boolean | string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = componentProps => {
  useEffect(() => {
    if (!props.children && !props.text && !props.ariaLabel) {
      console.warn(`Blackmaker: Button has no text or aria label.`);
    }
  }, []);

  const theme = useTheme();
  const ctxProps = useContext(ButtonGroupContext) ?? {};
  const props = { ...ctxProps, ...componentProps };
  const grouped = !!props.grouped;

  const Element = props.asAnchor ? 'a' : 'button';
  const hasContent = !!props.children;

  const isDark = theme.isDark;
  const minimalHoverBg = theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.2);
  const minimalActiveBg = theme.colorWithAlpha(theme.getMinimalBrandBaseColor(props.intent), 0.3);

  const backgroundColor = props.active
    ? !props.minimal && !props.outlined
      ? darken(theme.getColor(props.intent), 0.2)
      : minimalActiveBg
    : props.disabled
    ? !props.minimal && !props.outlined
      ? darken(theme.getColor(props.intent), 0.3)
      : minimalActiveBg
    : !props.minimal && !props.outlined
    ? theme.getColor(props.intent)
    : 'transparent';

  let color =
    !props.minimal && !props.outlined
      ? theme.getTextColorOnBrandColors(props.intent)
      : theme.getBrandTextColor(props.intent /*, 'inherit'*/);

  if (props.disabled && color !== 'inherit') {
    color = new Color(color).mix(new Color(backgroundColor), 0.3).toString();
  }
  if (props.active && color !== 'inherit') {
    color = new Color(color).mix(new Color(backgroundColor), 0.15).toString();
  }

  const bottomBorderSize = props.large ? '3px' : '2px';

  return (
    <MaybeFocusRing>
      <Element
        aria-label={props.ariaLabel}
        onClick={props.onClick}
        href={props.href}
        target={props.target}
        className={cxs({
          fontFamily: 'inherit',
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: props.large ? theme.definition.borderRadiusRegular : theme.definition.borderRadiusSmall,
          border: !props.outlined ? 'none' : `1px solid ${theme.getColor(props.intent)}`,
          boxShadow:
            !props.minimal && !props.outlined
              ? `0 ${bottomBorderSize} 0 0px ${theme.getBrandButtonShadowColor(props.intent)}`
              : undefined,
          fontSize: props.small ? '.8em' : props.large ? '1em' : '.8em',
          fontWeight: 'bold',
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          transition: '.1s background-color ease',
          outline: 'none',
          textAlign: props.textAlignment as Property.TextAlign,
          display: props.fill ? 'flex' : 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: props.fill ? '100%' : undefined,
          margin:
            props.margin === undefined || props.margin === true
              ? !grouped
                ? '2px 4px'
                : '2px 0 0 1px'
              : typeof props.margin === 'string'
              ? props.margin
              : undefined,
          verticalAlign: 'middle',
          height: props.small ? '2.2em' : '2.8em',
          padding: props.large
            ? hasContent
              ? '10px 14px'
              : '10px'
            : props.small
            ? hasContent
              ? '2px 10px'
              : '4px'
            : hasContent
            ? '8px 16px'
            : '8px',
          ...(!props.active &&
            !props.disabled && {
              ':hover': {
                backgroundColor:
                  !props.minimal && !props.outlined
                    ? theme.getColorLighten(props.intent ?? Intent.Default, 0.09)
                    : minimalHoverBg,
              },
              ':active': {
                transitionDuration: '.02s',
                backgroundColor:
                  !props.minimal && !props.outlined
                    ? theme.getColorLighten(props.intent ?? Intent.Default, 0.13)
                    : minimalActiveBg,
                ...(!props.minimal &&
                  !props.outlined && {
                    boxShadow: 'none',
                    transform: `translateY(${bottomBorderSize})`,
                  }),
              },
            }),
          ...(grouped && {
            ':first-child:not(:last-child)': {
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
            },
            ':last-child:not(:first-child)': {
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
            },
            ':not(:first-child):not(:last-child)': {
              borderRadius: 0,
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
                  marginLeft: hasContent ? '-.3em' : undefined,
                },
              }}
            />
            {props.children}
            {props.text}
            <RenderMaybeIcon
              icon={props.rightIcon}
              iconProps={{
                marginLeft: hasContent,
                css: {
                  marginRight: hasContent ? '-.3em' : undefined,
                },
              }}
            />
          </>
        )}
        {props.loading && <Spinner color={theme.getTextColorOnBrandColors(props.intent)} />}
      </Element>
    </MaybeFocusRing>
  );
};
