import * as React from 'react';
import { ChangeEvent, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Falsy, HtmlElementProps, IconName, Intent, RenderMaybeIcon, useTheme } from '../..';
import cxs from 'cxs';
import Color from 'color';
import { useFormInputProps } from '../useFormInputProps';

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
  inputElementProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  inputCss?: cxs.CSSObject | Falsy;
  inputId?: string;
  placeholder?: string | number;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string, valueAsNumber: number) => any;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => any;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => any;
  autoFocus?: boolean;
  selectAllOnClick?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement | null, TextInputProps>((componentProps, ref) => {
  const theme = useTheme();
  const ctxProps = useFormInputProps();
  const props: TextInputProps = { ...ctxProps, ...componentProps };
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => inputRef.current);

  // TODO we dont need logic for that, do it in css
  const borderColor = hasFocus
    ? theme.getColor(props.intent ?? Intent.Primary)
    : new Color(theme.definition.primaryBackgroundColor).darken(theme.isDark ? 0.3 : 0.3).toString();

  return (
    <div
      className={cxs({
        display: props.fill ? 'flex' : 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: !props.fill ? '340px' : undefined,
        borderRadius: props.round ? '999px' : theme.definition.borderRadiusSmall,
        border: `1px solid ${borderColor}`,
        boxShadow: hasFocus ? `0 0 0 1px ${borderColor}` : undefined,
        transition: '.2s border-color ease, .2s box-shadow ease',
        backgroundColor: new Color(theme.definition.primaryBackgroundColor)
          .darken(theme.isDark ? 0.1 : -0.1)
          .toString(),
        margin: '4px',
        padding: '0 .1em',
        fontSize: props.small ? '.75em' : props.large ? '1.2em' : '1em',
        color: theme.getBrandTextColor(props.intent),
        ...props.css,
      })}
      {...props.elementProps}
    >
      <RenderMaybeIcon
        icon={props.leftElement}
        iconProps={{
          marginRight: true,
          marginLeft: true,
          color: theme.getColor(props.intent),
        }}
      />
      <input
        id={props.inputId}
        ref={inputRef}
        onChange={e => {
          props.onChange?.(e, e.target.value, parseFloat(e.target.value));
        }}
        onClick={
          props.selectAllOnClick
            ? e => {
                props.inputElementProps?.onClick?.(e);
                inputRef.current?.select();
              }
            : props.inputElementProps?.onClick
        }
        placeholder={props.placeholder ? '' + props.placeholder : undefined}
        value={props.value}
        defaultValue={props.defaultValue}
        onFocus={e => {
          setHasFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={e => {
          setHasFocus(false);
          props.onBlur?.(e);
        }}
        type={props.type ?? 'text'}
        disabled={props.disabled}
        readOnly={props.readonly}
        className={cxs({
          flexGrow: 1,
          minWidth: '0',
          padding: '.6em',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          color: props.disabled
            ? theme.definition.textMutedColor
            : theme.getBrandTextColor(props.intent, theme.definition.textHightlightColor),
          fontSize: '1em',
          cursor: props.disabled ? 'not-allowed' : undefined,
          ...props.inputCss,
        })}
        {...props.inputElementProps}
      />
      <RenderMaybeIcon
        icon={props.rightElement}
        iconProps={{
          marginRight: true,
          marginLeft: true,
          color: theme.getColor(props.intent),
        }}
      />
    </div>
  );
});
