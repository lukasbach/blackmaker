import * as React from 'react';
import { darken, Icon, IconName, Intent, lighten, useTheme } from '../..';
import cxs from 'cxs';
import { useEffect, useRef, useState } from 'react';
import { CheckboxBlockProps } from './CheckboxBlock';
import { useFormInputProps } from '../useFormInputProps';
import { VisuallyHidden } from '../../common/components/VisuallyHidden';
import { MaybeFocusRing } from '../../accessibility/MaybeFocusRing';

export const Slider: React.FC<CheckboxBlockProps> = componentProps => {
  const theme = useTheme();
  const ctxProps = useFormInputProps();
  const props: CheckboxBlockProps = { ...ctxProps, ...componentProps };
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    if (checkbox.current) {
      setChecked(props.checked);
      if (props.checked === undefined) {
        checkbox.current.indeterminate = true;
        checkbox.current.checked = false;
      } else {
        // noinspection PointlessBooleanExpressionJS
        if (props.checked === false) {
          checkbox.current.indeterminate = false;
          checkbox.current.checked = false;
        } else {
          checkbox.current.indeterminate = false;
          checkbox.current.checked = true;
        }
      }
    }
  }, [props.checked]);

  const intent = props.intent ?? Intent.Primary;

  return (
    <MaybeFocusRing within={true}>
      <div
        className={cxs({
          display: 'inline-flex',
          alignItems: 'center',
          // justifyContent: checked === undefined ? 'center' : checked ? 'flex-end' : 'flex-start',
          paddingLeft: checked === undefined ? '.4em' : checked ? '.7em' : '.1em',
          boxSizing: 'border-box',
          width: '1.6em',
          height: '1em',
          fontSize: props.large ? '1.4em' : '1em',
          border: `1px solid ${darken(
            checked ? theme.getColor(intent) : darken(theme.definition.tertiaryBackgroundColor, 0),
            0.5
          )}`,
          backgroundColor: checked ? theme.getColor(intent) : darken(theme.definition.tertiaryBackgroundColor, 0),
          borderRadius: '9999px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: '.2s all ease',
          ':hover': {
            backgroundColor: checked
              ? theme.getColorDarken(intent, 0.15)
              : darken(theme.definition.tertiaryBackgroundColor, 0.15),
          },
          ':active': {
            backgroundColor: checked
              ? theme.getColorDarken(intent, 0.25)
              : darken(theme.definition.tertiaryBackgroundColor, 0.25),
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
              console.log(e.target.indeterminate, e.target.checked)
              const value = e.target.indeterminate ? undefined : e.target.checked;
              props.onChange?.(value, e);
              setChecked(value);
            }}
            id={props.inputId}
            {...props.elementProps}
          />
        </VisuallyHidden>
        <div
          className={cxs({
            backgroundColor: lighten(theme.definition.primaryBackgroundColor, 0.2),
            border: `1px solid ${lighten(theme.definition.primaryBackgroundColor, -0.2)}`,
            borderRadius: '9999px',
            width: '.6em',
            height: '.6em',
          })}
        />
      </div>
    </MaybeFocusRing>
  );
};
