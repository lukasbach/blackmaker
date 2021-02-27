import { ArrayFieldTemplateProps, ObjectFieldTemplateProps, utils, withTheme } from '@rjsf/core';
import React from 'react';
import { Button, ButtonGroup, IconName, Intent } from '@blackmaker/core';
import { TextInput } from '@blackmaker/core/out/forms/textinput/TextInput';
import { FormGroup } from '@blackmaker/core/out/forms/formgroup/FormGroup';
import { Checkbox } from '@blackmaker/core/out/forms/checkbox/Checkbox';
import { Heading } from '@blackmaker/core/out/typography/Heading';
import { Paragraph } from '@blackmaker/core/out/typography/Paragraph';
import cxs from 'cxs';
import { Flex } from '@blackmaker/core/out/common/components/Flex';
import { Box } from '@blackmaker/core/out/common/components/Box';

const { getDefaultRegistry } = utils;

const { fields, widgets } = getDefaultRegistry();

export const Form = withTheme({
  widgets: {
    ...widgets,
    TextWidget: props => (
      <TextInput
        fill={true}
        inputId={props.id}
        intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
        placeholder={props.placeholder}
        autoFocus={props.autofocus}
        disabled={props.disabled}
        readonly={props.readonly}
        type={
          ((props as any).type || props.schema.type) === 'string'
            ? 'text'
            : `${(props as any).type || props.schema.type}`
        }
        value={props.value}
        onChange={(e, value) => props.onChange(value === '' ? props.options?.emptyValue : value)}
        onBlur={e => props.onBlur(props.id, e.target.value)}
        onFocus={e => props.onFocus(props.id, e.target.value)}
      />
    ),
    CheckboxWidget: props => (
      <Checkbox
        inputId={props.id}
        label={props.label || props.schema.description || ''}
        checked={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
      />
    ),
  },
  fields: {
    ...fields,
    TitleField: props => (
      <Heading level={3}>
        {props.title}
      </Heading>
    )
  },
  FieldTemplate: props => (
    <FormGroup
      label={props.label}
      inputId={props.id}
      intent={props.rawErrors?.length > 0 ? Intent.Danger : undefined}
      helperText={
        props.rawErrors?.length > 0
          ? props.rawErrors.map(error => <div key={error}>{error}</div>)
          : props.rawDescription
      }
    >
      {props.children}
    </FormGroup>
  ),
  ArrayFieldTemplate: ({
    schema, registry, uiSchema, TitleField, idSchema, title, items, required, canAdd, onAddClick, disabled
  }: ArrayFieldTemplateProps) => {
    const titleComplete = uiSchema["ui:title"] || title;
    const description = uiSchema["ui:description"] || schema.description;
    const titleId = `${idSchema.$id}__title`;
    console.log({titleComplete, description, items, idSchema, TitleField})

    if (utils.isMultiSelect(schema, (registry as any || getDefaultRegistry()).rootSchema)) {
      return (
        <>
          isMultiSelect
        </>
      );
    } else {
      return (
        <>
          <TitleField id={titleId} title={titleComplete} required={required} />
          {items.map(item => (
            <Flex key={item.key}>
              <Box flexGrow={1}>
                { item.children }
              </Box>
              {(item.hasRemove || item.hasMoveUp || item.hasMoveDown) && (
                <Box minWidth="100px" textAlign="right">
                  <ButtonGroup small={true} minimal={true}>
                    {!item.disabled && !item.readonly && item.hasMoveUp && (
                      <Button
                        ariaLabel="Move item up"
                        icon={IconName.ArrowUpward}
                        onClick={item.onReorderClick(item.index, item.index - 1)}
                      />
                    )}
                    {!item.disabled && !item.readonly && item.hasMoveDown && (
                      <>
                        <Button
                          ariaLabel="Move item down"
                          icon={IconName.ArrowDownward}
                          onClick={item.onReorderClick(item.index, item.index + 1)}
                        />
                      </>
                    )}
                    {!item.disabled && !item.readonly && item.hasRemove && (
                      <Button
                        ariaLabel="Remove item"
                        icon={IconName.Delete}
                        onClick={item.onDropIndexClick(item.index)}
                      />
                    )}
                  </ButtonGroup>
                </Box>
              )}
            </Flex>
          ))}
          {canAdd && (
            <div>
              <Button
                css={{ float: 'right' }}
                disabled={disabled}
                onClick={onAddClick}
                icon={IconName.Add}
              >
                Add item
              </Button>
            </div>
          )}
        </>
      );
    }
  },
  ObjectFieldTemplate: ({
    uiSchema, title, required, idSchema, description, properties
  }: ObjectFieldTemplateProps) => (
    <>
      {(uiSchema["ui:title"] || title) && (
        <Heading
          level={4}
          elementProps={{
            id: `${idSchema.$id}-title`,
          }}
        >
          {title || uiSchema["ui:title"]}
        </Heading>
      )}
      {description && (
        <Paragraph
          elementProps={{
            id: `${idSchema.$id}-description`
          }}
          children={description}
        />
      )}
      {properties.map((element: any, index: number) => (
        <div key={index} className={cxs({ marginBottom: "10px" })}>
          {element.content}
        </div>
      ))}
    </>
  ),
  ErrorList: undefined,
  children: () => (
    <div>
      <Button type="submit" intent={Intent.Primary}>
        Submit
      </Button>
    </div>
  ),
}) as any;
