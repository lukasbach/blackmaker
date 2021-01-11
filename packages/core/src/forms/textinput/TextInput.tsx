import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Falsy, HtmlElementProps, IconName, Intent, RenderMaybeIcon, useTheme } from '../..';
import cxs from 'cxs';
import Color from 'color';

export interface TextInputProps extends HtmlElementProps<HTMLDivElement> {
  leftElement?: JSX.Element | IconName;
  rightElement?: JSX.Element | IconName;
  type?: string;
  round?: boolean;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  intent?: Intent;
  fill?: boolean;
  inputElementProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | Falsy;
  inputCss?: cxs.CSSObject | Falsy;
  placeholder?: string | number;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string, valueAsNumber: number) => any;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const theme = useTheme();
  const [hasFocus, setHasFocus] = useState(false);

  const borderColor = hasFocus
    ? theme.getColor(props.intent ?? Intent.Primary)
    : new Color(theme.definition.primaryBackgroundColor).darken(theme.isDark ? 0.3 : 0.3).toString();

  return (
    <div
      className={cxs({
        display: props.fill ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: !props.fill && '340px',
        borderRadius: props.round ? '999px' : theme.definition.borderRadiusSmall,
        border: `1px solid ${borderColor}`,
        transition: '.2s border-color ease',
        backgroundColor: new Color(theme.definition.primaryBackgroundColor)
          .darken(theme.isDark ? 0.1 : -0.1)
          .toString(),
        margin: '4px',
        padding: '0 .8em',
        fontSize: props.small ? '.85em' : props.large ? '1.2em' : '1em',
        color: theme.getColor(props.intent, theme.definition.textHightlightColor),
        ...props.css,
      })}
      {...props.elementProps}
    >
      <RenderMaybeIcon
        icon={props.leftElement}
        iconProps={{
          marginRight: true,
          color: theme.getColor(props.intent),
        }}
      />
      <input
        onChange={e => {
          props.onChange?.(e, e.target.value, parseFloat(e.target.value));
        }}
        placeholder={props.placeholder ? '' + props.placeholder : undefined}
        value={props.value}
        defaultValue={props.defaultValue}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        type={props.type ?? 'text'}
        disabled={props.disabled}
        readOnly={props.readonly}
        className={cxs({
          flexGrow: 1,
          padding: '.6em',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: props.disabled
            ? theme.definition.textMutedColor
            : theme.getColor(props.intent, theme.definition.textHightlightColor),
          fontSize: '1em',
          cursor: props.disabled && 'not-allowed',
          ...props.inputCss,
        })}
        {...props.inputElementProps}
      />
      <RenderMaybeIcon
        icon={props.rightElement}
        iconProps={{
          marginLeft: true,
        }}
      />
    </div>
  );
};
