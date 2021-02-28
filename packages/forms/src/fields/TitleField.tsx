import * as React from 'react';
import { Heading } from '@blackmaker/core/out/typography/Heading';
import { FieldProps } from '@rjsf/core';

export const TitleField: React.FC<FieldProps> = props => {
  return <Heading level={3}>{props.title}</Heading>;
};
