import * as React from 'react';
import { useContext, useRef } from 'react';
import { darken, HtmlElementProps, Intent, useTheme } from '../..';
import cxs from 'cxs';
import { RadioContainerContext } from './RadioContainerContext';

export interface RadioProps extends HtmlElementProps<HTMLInputElement> {
  disabled?: boolean;
  small?: boolean;
  large?: boolean;
  label?: string | JSX.Element;
  value: string;
}

export const Radio: React.FC<RadioProps> = props => {
  const theme = useTheme();
  const containerProps = useContext(RadioContainerContext);
  const radioButton = useRef<HTMLInputElement>();

  const radioSize = props.large ? '32px' : props.small ? '16px' : '22px';
  const radioInnerSize = props.large ? '16px' : props.small ? '8px' : '10px';
  const checked = containerProps.currentValue === props.value;
  const intent = Intent.Primary;
  const disabledBoxColor = darken(theme.definition.textDisabledColor, .3);

  return (
    <label
      className={ cxs({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        marginBottom: '.4em',
        fontSize: props.large ? '1.4em' : props.small ? '.8em' : '1em',
        color: props.disabled ? theme.definition.textDisabledColor : undefined,
        '> input': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: -1,
          opacity: 0,
        },
      }) }
    >
      <input
        ref={radioButton}
        type="radio"
        name={containerProps.groupName}
        value={props.value}
        disabled={props.disabled}
        onChange={e => {
          containerProps.onChange?.(e, e.target.value);
        }}
        {...props.elementProps}
      />
      <div
        className={cxs({
          marginRight: '.5em',
          width: radioSize,
          height: radioSize,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '9999px',
          border: `1px solid ${darken(theme.definition.primaryBackgroundColor, 0.2)}`,
          backgroundColor: props.disabled ? disabledBoxColor : checked ? theme.getColor(intent) : darken(theme.definition.primaryBackgroundColor, 0.08),
          transition: '.15s background-color ease',
          ':hover': {
            backgroundColor: props.disabled ? disabledBoxColor : checked
              ? theme.getColorDarken(intent, 0.05)
              : darken(theme.definition.primaryBackgroundColor, 0.12),
          },
          ':active': {
            backgroundColor: props.disabled ? disabledBoxColor : checked
              ? theme.getColorDarken(intent, 0.1)
              : darken(theme.definition.primaryBackgroundColor, 0.2),
          },
        })}
      >
        <div
          className={cxs({
            opacity: checked ? 1 : 0,
            width: radioInnerSize,
            height: radioInnerSize,
            borderRadius: '9999px',
            backgroundColor: props.disabled ? disabledBoxColor : theme.definition.textHightlightColor,
            transition: '.15s opacity ease',
            transitionDelay: '.11s',
            ':hover': {
              backgroundColor: checked
                ? theme.getColorDarken(intent, 0.05)
                : darken(theme.definition.primaryBackgroundColor, 0.12),
            },
            ':active': {
              backgroundColor: checked
                ? theme.getColorDarken(intent, 0.1)
                : darken(theme.definition.primaryBackgroundColor, 0.2),
            },
          })}
        />
      </div>
      { props.children }
      { props.label }
    </label>
  );
};
