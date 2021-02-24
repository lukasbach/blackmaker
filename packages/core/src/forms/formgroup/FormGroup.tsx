import * as React from 'react';
import { Intent, useTheme } from '../..';
import cxs from 'cxs';
import { FormInputPropsContext, useFormInputProps } from '../useFormInputProps';
import { FormInputProps } from '../FormInputProps';
import { useUniqueId } from '../../common/useUniqueId';
import { Paragraph } from '../../typography/Paragraph';
import { AnyElement } from '../../common/AnyElement';

export interface FormGroupProps {
  helperText?: string | AnyElement;
  label?: string | AnyElement;
  labelInfo?: string | AnyElement;
  intent?: Intent;
  inputProps?: Partial<FormInputProps>;
  dontAutomapLabel?: boolean;
  labelIdPrefix?: string;
  inputId?: string;
  small?: boolean;
  large?: boolean;
  disabled?: boolean;
  // inline TODO
}

export const FormGroup: React.FC<FormGroupProps> = props => {
  const theme = useTheme();
  const automapLabel = useUniqueId(props.labelIdPrefix ?? '__blackmaker_formgroup');
  const parentFormInputProps = useFormInputProps();
  const inputId = props.inputId ?? (!props.dontAutomapLabel ? automapLabel : undefined);
  const formInputProps: FormInputProps = {
    ...parentFormInputProps,
    small: props.small,
    large: props.large,
    inputId: inputId,
    intent: props.intent,
    disabled: props.disabled,
    ...props.inputProps,
  };

  return (
    <div
      className={cxs({
        margin: '.5em 0 1em 0',
      })}
    >
      {props.label && (
        <label
          htmlFor={inputId}
          className={cxs({
            cursor: formInputProps.disabled ? 'not-allowed' : !props.dontAutomapLabel ? 'pointer' : undefined,
            display: 'block',
            color: formInputProps.disabled ? `${theme.definition.textDisabledColor} !important` : undefined,
          })}
        >
          {props.label}
          {props.labelInfo && (
            <span
              className={cxs({
                color: theme.definition.textMutedColor,
                marginLeft: '.5em',
              })}
            >
              {props.labelInfo}
            </span>
          )}
        </label>
      )}
      <FormInputPropsContext.Provider value={formInputProps}>{props.children}</FormInputPropsContext.Provider>
      {props.helperText && (
        <Paragraph
          content={props.helperText}
          small={true}
          large={formInputProps.large}
          muted={!formInputProps.intent}
          disabled={formInputProps.disabled}
          intent={formInputProps.intent === Intent.Default ? undefined : formInputProps.intent}
        />
      )}
    </div>
  );
};
