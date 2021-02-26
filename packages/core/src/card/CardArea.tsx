import * as React from 'react';
import { darken, HtmlElementProps, Intent, lighten, MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Paragraph } from '../typography/Paragraph';
import { useContext, useState } from 'react';
import { CardContainerContext } from './CardContainer';
import Color from 'color';
import { TextAlign } from '../common/TextAlign';
import { MaybeFocusRing } from '../accessibility/MaybeFocusRing';

export interface CardAreaProps extends HtmlElementProps {
  muted?: boolean;
  highlighted?: boolean;
  header?: boolean;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  icon?: MaybeIcon;
  content?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  interactive?: boolean;
  onClick?: () => any;
  actions?: JSX.Element; // TODO Button Group
  intent?: Intent;
  as?: string;
  align?: TextAlign;
  borderBottom?: boolean;
}

export const CardArea: React.FC<CardAreaProps> = props => {
  const { hovering, borderColor, backgroundColor: cardBackgroundColor } = useContext(CardContainerContext);
  const [hoveringActions, setHoveringActions] = useState(false);
  const theme = useTheme();
  const Element =
    props.as ??
    (props.headingLevel ? (`h${props.headingLevel}` as any) : props.interactive && props.onClick ? 'button' : 'div');

  const backgroundColor = props.muted
    ? theme.definition.secondaryBackgroundColor
    : props.intent
    ? theme.getColor(props.intent)
    : props.highlighted
    ? theme.definition.tertiaryBackgroundColor
    : cardBackgroundColor;
  const backgroundColorHover = new Color(backgroundColor).lighten(theme.isDark ? 0.1 : -0.05).toString();

  const showChilds = {
    transition: '.1s opacity ease',
    opacity: '1 !important',
  };

  return (
    <MaybeFocusRing canFocus={props.interactive && !!props.onClick}>
      <Element
        onClick={props.onClick}
        className={cxs({
          display: 'block',
          width: '100%',
          position: 'relative',
          padding:
            props.header && !props.highlighted && !props.borderBottom ? '1.8em 1.6em 1.2em 1.6em' : '1.2em 1.6em',
          margin: '0',
          fontSize: '1em',
          fontWeight: props.header && ('bold' as any),
          color: props.intent
            ? theme.getTextColorOnBrandColors(props.intent)
            : props.header
            ? theme.definition.textHightlightColor
            : props.muted
            ? theme.definition.textMutedColor
            : 'inherit',
          border: 'none',
          outline: 'none',
          fontFamily: 'inherit',
          boxSizing: 'inherit',
          backgroundColor: hovering ? backgroundColorHover : backgroundColor,
          textAlign: props.align ?? 'inherit',
          transition: '.1s background-color ease',
          cursor: props.onClick && props.interactive ? 'pointer' : undefined,
          borderBottom: props.borderBottom ? `1px solid ${borderColor}` : undefined,
          ':hover': {
            backgroundColor: props.interactive ? backgroundColorHover : undefined,
          },
          ':hover div:first-child': showChilds,
          ':focus-within div:first-child': showChilds,
          ...(!hoveringActions && {
            ':active': {
              transition: '.01s background-color ease',
              backgroundColor:
                props.onClick && props.interactive
                  ? lighten(backgroundColorHover, theme.isDark ? 0.1 : -0.05)
                  : undefined,
            },
          }),
          ...props.css,
        })}
        {...props.elementProps}
      >
        {props.actions && (
          <div
            className={cxs({
              position: 'absolute',
              top: '-10px',
              right: '10px',
              opacity: 0,
            })}
            onClick={e => e.stopPropagation()}
            onMouseEnter={() => setHoveringActions(true)}
            onMouseLeave={() => setHoveringActions(false)}
          >
            {props.actions}
          </div>
        )}
        <RenderMaybeIcon
          icon={props.icon}
          iconProps={{
            css: {
              marginRight: '.8em',
            },
          }}
        />
        {props.content}
        {props.children}
        {props.subtitle && (
          <Paragraph
            content={props.subtitle}
            muted={!props.intent}
            small={true}
            css={{
              fontWeight: 'normal',
              marginTop: '.3em',
              color: props.intent ? theme.getTextColorOnBrandColors(props.intent) : undefined,
            }}
          />
        )}
      </Element>
    </MaybeFocusRing>
  );
};
