import * as React from 'react';
import { ArrayFieldTemplateProps, utils } from '@rjsf/core';
import { Flex } from '@blackmaker/core/out/common/components/Flex';
import { Box } from '@blackmaker/core/out/common/components/Box';
import { Button, ButtonGroup, IconName } from '@blackmaker/core';

const { getDefaultRegistry } = utils;

export const ArrayFieldTemplate: React.FC<ArrayFieldTemplateProps> = props => {
  const titleComplete = props.uiSchema["ui:title"] || props.title;
  const description = props.uiSchema["ui:description"] || props.schema.description;
  const titleId = `${props.idSchema.$id}__title`;

  // TODO Description

  if (utils.isMultiSelect(props.schema, (props.registry as any || getDefaultRegistry()).rootSchema)) {
    return (
      <>
        isMultiSelect
      </>
    );
  } else {
    return (
      <>
        <props.TitleField id={titleId} title={titleComplete} required={props.required} />
        {props.items.map(item => (
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
        {props.canAdd && (
          <Box textAlign="right">
            <Button
              disabled={props.disabled}
              onClick={props.onAddClick}
              icon={IconName.Add}
            >
              Add item
            </Button>
          </Box>
        )}
      </>
    );
  }
};
