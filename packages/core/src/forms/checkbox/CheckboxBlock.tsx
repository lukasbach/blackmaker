import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { darken, HtmlElementProps, Icon, IconName, Intent, useTheme } from '../..';
import cxs from 'cxs';
import { useFormInputProps } from '../useFormInputProps';
import { VisuallyHidden } from '../../common/components/VisuallyHidden';
import { MaybeFocusRing } from '../../accessibility/MaybeFocusRing';
import { Checkable, CheckableProps } from './Checkable';

export interface CheckboxBlockProps extends Omit<CheckableProps, 'renderContent' | 'containerCss'> {
}

export const CheckboxBlock: React.FC<CheckboxBlockProps> = props => {
  const theme = useTheme();

  const size = props.large ? '1.4em' : '1em';
  const intent = props.intent ?? Intent.Primary;

  return (
    <Checkable
      {...props}
      renderContainerCss={({ checked, disabled, readonly }) => ({
        display: 'inline-block',
        width: '1em',
        height: '1em',
        fontSize: size,
        border: `1px solid ${darken(theme.definition.primaryBackgroundColor, 0.2)}`,
        backgroundColor:
          checked !== false ? theme.getColor(intent) : darken(theme.definition.primaryBackgroundColor, 0.08),
        borderRadius: theme.definition.borderRadiusSmall,
        textAlign: 'center',
        cursor: (readonly || disabled) ? 'disallowed' : 'pointer',
        transition: '.15s background-color ease',
        ':hover': {
          backgroundColor:
            checked !== false
              ? theme.getColorDarken(intent, 0.05)
              : darken(theme.definition.primaryBackgroundColor, 0.12),
        },
        ':active': {
          backgroundColor:
            checked !== false
              ? theme.getColorDarken(intent, 0.1)
              : darken(theme.definition.primaryBackgroundColor, 0.2),
        },
      })}
      renderContent={({ checked }) => (
        <Icon
          name={checked ? IconName.Check : IconName.HorizontalRule}
          size=".9em"
          css={{
            marginTop: '-.7em',
            opacity: checked === false ? 0 : 1,
            color: '#fff',
          }}
        />
      )}
    />
  );
};
