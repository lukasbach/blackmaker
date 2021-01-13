import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { darken, HtmlElementProps, Icon, IconName, Intent, useTheme } from '../..';
import cxs from 'cxs';
import { useFormInputProps } from '../useFormInputProps';
import { VisuallyHidden } from '../../common/VisuallyHidden';

export interface CheckboxBlockProps extends HtmlElementProps<HTMLInputElement> {
  intent?: Intent;
  large?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean | undefined, e?: React.ChangeEvent<HTMLInputElement> | undefined) => any;
  inputId?: string;
}

export const CheckboxBlock: React.FC<CheckboxBlockProps> = componentProps => {
  const theme = useTheme();
  const ctxProps = useFormInputProps();
  const props: CheckboxBlockProps = { ...ctxProps, ...componentProps };
  const checkbox = useRef<HTMLInputElement>();
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    setChecked(props.checked);
    if (props.checked === undefined) {
      checkbox.current.indeterminate = true;
      checkbox.current.checked = false;
    } else if (props.checked === false) {
      checkbox.current.indeterminate = false;
      checkbox.current.checked = false;
    } else {
      checkbox.current.indeterminate = false;
      checkbox.current.checked = true;
    }
  }, [props.checked]);

  const size = props.large ? '1.4em' : '1em';
  const intent = props.intent ?? Intent.Primary;

  return (
    <div
      className={cxs({
        display: 'inline-block',
        width: '1em',
        height: '1em',
        fontSize: size,
        border: `1px solid ${darken(theme.definition.primaryBackgroundColor, 0.2)}`,
        backgroundColor: checked ? theme.getColor(intent) : darken(theme.definition.primaryBackgroundColor, 0.08),
        borderRadius: theme.definition.borderRadiusSmall,
        textAlign: 'center',
        cursor: 'pointer',
        transition: '.15s background-color ease',
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
      onClick={() => {
        props.onChange?.(!checked);
        setChecked(!checked);
      }}
    >
      <VisuallyHidden>
        <input
          type="checkbox"
          ref={checkbox}
          onChange={e => {
            const value = e.target.indeterminate ? undefined : e.target.checked;
            props.onChange?.(value, e);
            setChecked(value);
          }}
          id={props.inputId}
          {...props.elementProps}
        />
      </VisuallyHidden>
      <Icon
        name={checked ? IconName.Check : IconName.HorizontalRule}
        size=".9em"
        css={{
          marginTop: '-.4em',
          opacity: checked === false ? 0 : 1,
        }}
      />
    </div>
  );
};
