import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { darken, HtmlElementProps, Icon, IconName, Intent, useTheme } from '../..';
import cxs from 'cxs';

export interface CheckboxBlockProps extends HtmlElementProps<HTMLInputElement> {
  intent?: Intent;
  large?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean | undefined, e?: React.ChangeEvent<HTMLInputElement> | undefined) => any;
}

export const CheckboxBlock: React.FC<CheckboxBlockProps> = props => {
  const theme = useTheme();
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
      className={ cxs({
        position: 'relative',
        display: 'inline-block',
        width: '1em',
        height: '1em',
        fontSize: size,
        border: `1px solid ${darken(theme.definition.primaryBackgroundColor, .2)}`,
        backgroundColor: checked ? theme.getColor(intent) : darken(theme.definition.primaryBackgroundColor, .08),
        borderRadius: theme.definition.borderRadiusSmall,
        textAlign: 'center',
        cursor: 'pointer',
        transition: '.15s background-color ease',
        '> input': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: -1,
          opacity: 0
        },
        ':hover': {
          backgroundColor: checked ? theme.getColorDarken(intent, .05) : darken(theme.definition.primaryBackgroundColor, .12),
        },
        ':active': {
        backgroundColor: checked ? theme.getColorDarken(intent, .1) : darken(theme.definition.primaryBackgroundColor, .2),
      },
      }) }
      onClick={() => {
        props.onChange?.(!checked);
        setChecked(!checked);
      }}
    >
      <input
        type="checkbox"
        ref={checkbox}
        onChange={e => {
          const value = e.target.indeterminate ? undefined : e.target.checked;
          props.onChange?.(value, e);
          setChecked(value);
        }}
      />
      <Icon
        name={checked ? IconName.Check : IconName.HorizontalRule}
        size=".9em"
        css={{
          marginTop: '-.4em',
          opacity: checked === false ? 0 : 1
        }}
      />
    </div>
  );
};
