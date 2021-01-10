import * as React from 'react';
import { HtmlElementProps, MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Heading } from '../typography/Heading';
import { Paragraph } from '../typography/Paragraph';
import { useContext } from 'react';
import { CardContainerContext } from './CardContainer';
import Color from 'color';

export interface CardAreaProps extends HtmlElementProps {
  muted?: boolean;
  highlighted?: boolean;
  header?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  icon?: MaybeIcon;
  content?: string | JSX.Element;
  subtitle?: string | JSX.Element;
}

export const CardArea: React.FC<CardAreaProps> = props => {
  const theme = useTheme();
  const Element = props.headingLevel ? `h${props.headingLevel}` as any : 'div';
  const { hovering } = useContext(CardContainerContext);

  const backgroundColor = props.muted ? theme.definition.secondaryBackgroundColor : props.highlighted ? theme.definition.tertiaryBackgroundColor : theme.definition.primaryBackgroundColor;

  return (
    <Element
      className={ cxs({
        display: 'block',
        padding: (props.header && !props.highlighted) ? '1.8em 1.6em 1.2em 1.6em' : '1.2em 1.6em',
        margin: '0',
        fontSize: '1em',
        fontWeight: props.header && 'bold' as any,
        color: props.header ? theme.definition.textHightlightColor : props.muted ? theme.definition.textMutedColor : undefined,
        backgroundColor: hovering ? new Color(backgroundColor).lighten(theme.isDark ? .1 : -.05).toString() : backgroundColor,
        textAlign: (props.header && !props.highlighted) ? 'center' : undefined,
        transition: '.1s background-color ease',
        ...props.css
      }) }
      {...props.elementProps}
    >
      <RenderMaybeIcon
        icon={props.icon}
        iconProps={{
          css: {
            marginRight: '.8em'
          }
        }}
      />
      { props.content }
      { props.children }
      { props.subtitle && (
        <Paragraph
          content={props.subtitle}
          muted={true}
          small={true}
          css={{
            fontWeight: 'normal',
            marginTop: '.3em'
          }}
        />
      ) }
    </Element>
  );
};
