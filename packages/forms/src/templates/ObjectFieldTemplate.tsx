import * as React from 'react';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import { Heading } from '@blackmaker/core/out/typography/Heading';
import { Paragraph } from '@blackmaker/core/out/typography/Paragraph';
import cxs from 'cxs';

export const ObjectFieldTemplate: React.FC<ObjectFieldTemplateProps> = props => {
  return (
    <>
      {(props.uiSchema['ui:title'] || props.title) && (
        <Heading
          level={4}
          elementProps={{
            id: `${props.idSchema.$id}-title`,
          }}
        >
          {props.title || props.uiSchema['ui:title']}
        </Heading>
      )}
      {props.description && (
        <Paragraph
          elementProps={{
            id: `${props.idSchema.$id}-description`,
          }}
          children={props.description}
        />
      )}
      {props.properties.map((element: any, index: number) => (
        <div key={index} className={cxs({ marginBottom: '10px' })}>
          {element.content}
        </div>
      ))}
    </>
  );
};
