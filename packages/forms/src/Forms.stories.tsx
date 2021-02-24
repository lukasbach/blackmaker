import React from 'react';
import { Meta } from '@storybook/react';
import { Form } from './index';
import { samples } from './samples.storyhelper';

export default {
  title: 'Forms/Form Examples',
} as Meta;
export const AdditionalProperties = () => (
  <Form 
    schema={(samples as any)['additionalProperties'].schema}
    uiSchema={(samples as any)['additionalProperties'].uiSchema}
    formData={(samples as any)['additionalProperties'].formData}
 />
);

export const AllOf = () => (
  <Form 
    schema={(samples as any)['allOf'].schema}
    uiSchema={(samples as any)['allOf'].uiSchema}
    formData={(samples as any)['allOf'].formData}
 />
);

export const Alternatives = () => (
  <Form 
    schema={(samples as any)['alternatives'].schema}
    uiSchema={(samples as any)['alternatives'].uiSchema}
    formData={(samples as any)['alternatives'].formData}
 />
);

export const AnyOf = () => (
  <Form 
    schema={(samples as any)['anyOf'].schema}
    uiSchema={(samples as any)['anyOf'].uiSchema}
    formData={(samples as any)['anyOf'].formData}
 />
);

export const Arrays = () => (
  <Form 
    schema={(samples as any)['arrays'].schema}
    uiSchema={(samples as any)['arrays'].uiSchema}
    formData={(samples as any)['arrays'].formData}
 />
);

export const Custom = () => (
  <Form 
    schema={(samples as any)['custom'].schema}
    uiSchema={(samples as any)['custom'].uiSchema}
    formData={(samples as any)['custom'].formData}
 />
);

export const Date = () => (
  <Form 
    schema={(samples as any)['date'].schema}
    uiSchema={(samples as any)['date'].uiSchema}
    formData={(samples as any)['date'].formData}
 />
);

export const Defaults = () => (
  <Form 
    schema={(samples as any)['defaults'].schema}
    uiSchema={(samples as any)['defaults'].uiSchema}
    formData={(samples as any)['defaults'].formData}
 />
);

export const Errors = () => (
  <Form 
    schema={(samples as any)['errors'].schema}
    uiSchema={(samples as any)['errors'].uiSchema}
    formData={(samples as any)['errors'].formData}
 />
);

export const ErrorSchema = () => (
  <Form 
    schema={(samples as any)['errorSchema'].schema}
    uiSchema={(samples as any)['errorSchema'].uiSchema}
    formData={(samples as any)['errorSchema'].formData}
 />
);

export const Examples = () => (
  <Form 
    schema={(samples as any)['examples'].schema}
    uiSchema={(samples as any)['examples'].uiSchema}
    formData={(samples as any)['examples'].formData}
 />
);

export const Files = () => (
  <Form 
    schema={(samples as any)['files'].schema}
    uiSchema={(samples as any)['files'].uiSchema}
    formData={(samples as any)['files'].formData}
 />
);

export const Large = () => (
  <Form 
    schema={(samples as any)['large'].schema}
    uiSchema={(samples as any)['large'].uiSchema}
    formData={(samples as any)['large'].formData}
 />
);

export const Nested = () => (
  <Form 
    schema={(samples as any)['nested'].schema}
    uiSchema={(samples as any)['nested'].uiSchema}
    formData={(samples as any)['nested'].formData}
 />
);

export const Null = () => (
  <Form 
    schema={(samples as any)['null'].schema}
    uiSchema={(samples as any)['null'].uiSchema}
    formData={(samples as any)['null'].formData}
 />
);

export const Nullable = () => (
  <Form 
    schema={(samples as any)['nullable'].schema}
    uiSchema={(samples as any)['nullable'].uiSchema}
    formData={(samples as any)['nullable'].formData}
 />
);

export const Numbers = () => (
  <Form 
    schema={(samples as any)['numbers'].schema}
    uiSchema={(samples as any)['numbers'].uiSchema}
    formData={(samples as any)['numbers'].formData}
 />
);

export const OneOf = () => (
  <Form 
    schema={(samples as any)['oneOf'].schema}
    uiSchema={(samples as any)['oneOf'].uiSchema}
    formData={(samples as any)['oneOf'].formData}
 />
);

export const Ordering = () => (
  <Form 
    schema={(samples as any)['ordering'].schema}
    uiSchema={(samples as any)['ordering'].uiSchema}
    formData={(samples as any)['ordering'].formData}
 />
);

export const PropertyDependencies = () => (
  <Form 
    schema={(samples as any)['propertyDependencies'].schema}
    uiSchema={(samples as any)['propertyDependencies'].uiSchema}
    formData={(samples as any)['propertyDependencies'].formData}
 />
);

export const References = () => (
  <Form 
    schema={(samples as any)['references'].schema}
    uiSchema={(samples as any)['references'].uiSchema}
    formData={(samples as any)['references'].formData}
 />
);

export const SchemaDependencies = () => (
  <Form 
    schema={(samples as any)['schemaDependencies'].schema}
    uiSchema={(samples as any)['schemaDependencies'].uiSchema}
    formData={(samples as any)['schemaDependencies'].formData}
 />
);

export const Simple = () => (
  <Form 
    schema={(samples as any)['simple'].schema}
    uiSchema={(samples as any)['simple'].uiSchema}
    formData={(samples as any)['simple'].formData}
 />
);

export const Single = () => (
  <Form 
    schema={(samples as any)['single'].schema}
    uiSchema={(samples as any)['single'].uiSchema}
    formData={(samples as any)['single'].formData}
 />
);

