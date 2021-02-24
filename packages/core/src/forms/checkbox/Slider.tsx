import * as React from 'react';
import { darken, Intent, lighten, useTheme } from '../..';
import cxs from 'cxs';
import { CheckboxBlockProps } from './CheckboxBlock';
import { VisuallyHidden } from '../../common/components/VisuallyHidden';
import { MaybeFocusRing } from '../../accessibility/MaybeFocusRing';
import { Checkable } from './Checkable';

export const Slider: React.FC<CheckboxBlockProps> = props => {
  const theme = useTheme();

  const intent = props.intent ?? Intent.Primary;

  return (
    <Checkable
      {...props}
      renderContainerCss={({ checked, disabled, readonly }) => ({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: checked === undefined ? '.55em' : checked ? '.7em' : '.1em',
        boxSizing: 'border-box',
        width: '1.8em',
        height: '1.1em',
        fontSize: props.large ? '1.4em' : '1em',
        backgroundColor: checked ? theme.getColor(intent) : darken(theme.definition.tertiaryBackgroundColor, 0),
        borderRadius: '9999px',
        textAlign: 'center',
        cursor: (readonly || disabled) ? 'disallowed' : 'pointer',
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
      renderContent={({ checked }) => (
        <div
          className={cxs({
            backgroundColor: '#fff',
            border: `1px solid ${lighten('#fff', -0.3)}`,
            borderRadius: '9999px',
            width: '.7em',
            height: '.7em',
          })}
        />
      )}
    />
  );
};
