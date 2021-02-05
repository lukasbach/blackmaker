import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';
import Color from 'color';
import { BackgroundColor } from '../theming/BackgroundColor';

export interface CardContainerProps extends HtmlElementProps {
  shadow?: number;
  interactive?: boolean;
  onClick?: () => any;
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => any;
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => any;
  background?: BackgroundColor;
  fill?: boolean;
}

export const CardContainerContext = React.createContext({
  hovering: false,
});

export const CardContainer: React.FC<CardContainerProps> = props => {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  const backgroundColor = theme.getBackgroundColor(props.background ?? BackgroundColor.Primary);

  return (
    <div
      onMouseEnter={e => {
        props.onMouseOver?.(e);
        if (props.interactive && !isHovering) {
          setIsHovering(true);
        }
      }}
      onMouseLeave={e => {
        props.onMouseOut?.(e);
        if (props.interactive && isHovering) {
          setIsHovering(false);
        }
      }}
      className={cxs({
        display: props.fill ? 'block' :  'inline-block',
        backgroundColor: backgroundColor,
        border: `1px solid ${new Color(backgroundColor).darken(0.2)}`,
        borderRadius: theme.definition.borderRadiusRegular,
        cursor: props.interactive && 'pointer',
        '> :first-child': {
          borderTopLeftRadius: theme.definition.borderRadiusRegular,
          borderTopRightRadius: theme.definition.borderRadiusRegular,
        },
        '> :last-child': {
          borderBottomLeftRadius: theme.definition.borderRadiusRegular,
          borderBottomRightRadius: theme.definition.borderRadiusRegular,
        },
        ...theme.cssShadow(props.shadow),
        ...props.css,
      })}
      {...props.elementProps}
    >
      {props.interactive ? (
        <CardContainerContext.Provider value={{ hovering: isHovering }}>{props.children}</CardContainerContext.Provider>
      ) : (
        props.children
      )}
    </div>
  );
};
