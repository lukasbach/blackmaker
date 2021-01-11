import * as React from 'react';
import { HtmlElementProps, noSelect, useTheme } from '..';
import cxs from 'cxs';

export interface ParagraphProps extends HtmlElementProps<HTMLParagraphElement> {
  small?: boolean;
  large?: boolean;
  muted?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  truncate?: boolean;
  content?: string | JSX.Element;
  running?: boolean;
  noSelect?: boolean;
}

export const Paragraph: React.FC<ParagraphProps> = props => {
  const theme = useTheme();

  return (
    <p
      className={cxs({
        lineHeight: props.running && '1.5em',
        fontSize: props.small ? '.8em' : props.large ? '1.2em' : '1em',
        margin: '0',
        color: props.muted
          ? theme.definition.textMutedColor
          : props.disabled
          ? theme.definition.textDisabledColor
          : props.highlighted
          ? theme.definition.textHightlightColor
          : theme.definition.textColor,
        ...(props.truncate
          ? {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
            }
          : {}),
        ...(props.noSelect ? noSelect : {}),
        ...props.css,
      })}
      {...props.elementProps}
    >
      {props.content}
      {props.children}
    </p>
  );
};
