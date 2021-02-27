import * as React from 'react';
import { FieldTemplateProps } from '@rjsf/core';
import { FormGroup } from '@blackmaker/core/out/forms/formgroup/FormGroup';
import { Intent } from '@blackmaker/core';
import { Paragraph } from '@blackmaker/core/out/typography/Paragraph';

export const FieldTemplate: React.FC<FieldTemplateProps> = props => {

  return (
    <>
      {props.rawDescription && <Paragraph children={props.rawDescription} />}
      <FormGroup
        label={props.label}
        inputId={props.id}
        intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
        helperText={props.rawHelp}
      >
        {props.children}
      </FormGroup>
      {props.rawErrors?.map(error => <Paragraph children={error} intent={Intent.Danger} key={error} />)}
    </>
  );
};
