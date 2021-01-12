import * as React from 'react';
import { noSelect, useTheme } from '../..';
import cxs from 'cxs';
import { CheckboxBlock, CheckboxBlockProps } from './CheckboxBlock';
import { Slider } from './Slider';
import { useFormInputProps } from '../useFormInputProps';

export interface CheckboxProps extends CheckboxBlockProps {
  label: JSX.Element | string;
  switch?: boolean;
  alignBoxRight?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = componentProps => {
  const ctxProps = useFormInputProps();
  const props: CheckboxProps = {...ctxProps, ...componentProps};

  const box = <div>{props.switch ? <Slider {...props} /> : <CheckboxBlock {...props} />}</div>;

  return (
    <label
      className={cxs({
        display: 'flex',
        alignItems: 'center',
        margin: '.4em 0',
        cursor: 'pointer',
      })}
    >
      {!props.alignBoxRight && box}
      <p
        className={cxs({
          margin: '0 .6em',
          fontSize: props.large ? '1.2em' : '1em',
          flexGrow: 1,
          ...noSelect,
        })}
      >
        {props.label}
        {componentProps.children}
      </p>
      {props.alignBoxRight && box}
    </label>
  );
};
