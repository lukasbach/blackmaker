import * as React from 'react';
import cxs from 'cxs';
import { darken, HtmlElementProps, Intent } from '../../common';
import { useFormInputProps } from '../useFormInputProps';
import { useEffect, useRef, useState } from 'react';
import { MaybeFocusRing } from '../../accessibility/MaybeFocusRing';
import { VisuallyHidden } from '../../common/components/VisuallyHidden';
import { AnyElement } from '../../common/AnyElement';

export interface CheckableProps extends HtmlElementProps<HTMLInputElement> {
  intent?: Intent;
  large?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean | undefined, e?: React.ChangeEvent<HTMLInputElement> | undefined) => any;
  inputId?: string;
  renderContainerCss?: (props: CheckableProps) => cxs.CSSObject;
  renderContent?: (props: CheckableProps) => AnyElement;
  disabled?: boolean;
  autofocus?: boolean;
  required?: boolean;
  readonly?: boolean;
  canFocus?: boolean;
}

export const Checkable: React.FC<CheckableProps> = componentProps => {
  const ctxProps = useFormInputProps();
  const props: CheckableProps = { ...ctxProps, ...componentProps };
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

  const renderProps = {...props, checked};

  return (
    <MaybeFocusRing within={true} canFocus={props.canFocus ?? true}>
      <div
        className={cxs(props.renderContainerCss?.(renderProps) ?? {})}
        onClick={() => {
          props.onChange?.(!checked);
          setChecked(!checked);
        }}
      >
        <VisuallyHidden>
          <input
            type="checkbox"
            ref={checkbox}
            required={props.required}
            disabled={props.disabled}
            readOnly={props.readonly}
            onChange={e => {
              const value = e.target.indeterminate ? undefined : e.target.checked;
              props.onChange?.(value, e);
              setChecked(value);
            }}
            id={props.inputId}
            {...props.elementProps}
          />
        </VisuallyHidden>
        {props.renderContent?.(renderProps)}
      </div>
    </MaybeFocusRing>
  );
};
