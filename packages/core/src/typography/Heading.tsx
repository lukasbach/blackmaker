import * as React from 'react';
import { HtmlElementProps, Intent, switchEnum, ThemeContext, useTheme } from '..';
import cxs from 'cxs';
import { useContext } from 'react';

export interface HeadingProps extends HtmlElementProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  intent?: Intent;
}

export const Heading: React.FC<HeadingProps> = props => {
  const theme = useTheme();
  const level = props.level ?? 1;
  const Tag = `h${level}` as any;

  return (
    <Tag
      className={cxs({
        fontSize: switchEnum(level, [
          [1, '1.65em'],
          [2, '1.45em'],
          [3, '1.35em'],
          [4, '1.2em'],
          [5, '1.1em'],
          [6, '.9em'],
        ]),
        margin: switchEnum(level, [
          [1, '.8em 0 .2em 0'],
          [2, '.8em 0 .2em 0'],
          [3, '.8em 0 .2em 0'],
          [4, '.8em 0 .2em 0'],
          [5, '.8em 0 .2em 0'],
          [6, '.8em 0 .2em 0'],
        ]),
        color:
          !props.intent || props.intent === Intent.Default
            ? theme.definition.textHightlightColor
            : theme.getColor(props.intent),
        ...props.css,
      })}
      {...props.elementProps}
    >
      {props.children}
    </Tag>
  );
};
