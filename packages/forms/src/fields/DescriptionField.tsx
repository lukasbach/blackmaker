import * as React from 'react';
import { FieldProps } from '@rjsf/core';
import { Paragraph } from '@blackmaker/core/out/typography/Paragraph';

export const DescriptionField: React.FC<FieldProps & { description?: string }> = props => {
  return props.description ? <Paragraph children={props.description} /> : null;
};
