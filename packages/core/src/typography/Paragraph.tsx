import * as React from 'react';
import { HtmlElementProps, Intent, noSelect, useTheme } from '..';
import cxs from 'cxs';
import { MaybeTruncate } from '../common/MaybeTruncate';
import { AnyElement } from '../common/AnyElement';

export interface ParagraphProps extends HtmlElementProps<HTMLParagraphElement> {
  small?: boolean;
  large?: boolean;
  muted?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  truncate?: boolean;
  content?: string | AnyElement;
  running?: boolean;
  noSelect?: boolean;
  intent?: Intent;
  singleBlock?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = props => {
  const theme = useTheme();

  const color = props.muted
    ? theme.definition.textMutedColor
    : props.disabled
    ? theme.definition.textDisabledColor
    : props.highlighted
    ? theme.definition.textHightlightColor
    : props.intent
    ? theme.getBrandTextColor(props.intent)
    : theme.definition.textColor;

  return (
    <p
      className={cxs({
        lineHeight: props.running ? '1.5em' : undefined,
        fontSize: props.small ? '.8em' : props.large ? '1.2em' : '1em',
        margin: !props.singleBlock ? '0 0 .5em 0' : undefined,
        ...(props.noSelect ? noSelect : {}),
        ...props.css,
        color: (props.css || {}).color ?? color,
      })}
      {...props.elementProps}
    >
      <MaybeTruncate content={typeof props.content === 'string' ? props.content : undefined} truncate={props.truncate}>
        {props.children}
      </MaybeTruncate>
    </p>
  );
};
