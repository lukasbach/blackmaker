import * as React from 'react';
import { MouseEvent, useState } from 'react';
import { darken, HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';
import { BackgroundColor } from '../theming/BackgroundColor';

export interface CardContainerProps extends HtmlElementProps {
  shadow?: number;
  interactive?: boolean;
  onClick?: () => any;
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => any;
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => any;
  background?: BackgroundColor | string;
  fill?: boolean;
}

export const CardContainerContext = React.createContext({
  hovering: false,
  borderColor: '#000',
  backgroundColor: '#fff',
});

export const CardContainer: React.FC<CardContainerProps> = props => {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  const backgroundColor = theme.getBackgroundColor(props.background ?? BackgroundColor.Primary);
  const borderColor = darken(backgroundColor, theme.isDark ? -0.25 : 0.1);

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
        display: props.fill ? 'block' : 'inline-block',
        boxSizing: 'border-box',
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: theme.definition.borderRadiusRegular,
        cursor: props.interactive ? 'pointer' : undefined,
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
      <CardContainerContext.Provider
        value={{ hovering: (props.interactive && isHovering) ?? false, borderColor, backgroundColor }}
      >
        {props.children}
      </CardContainerContext.Provider>
    </div>
  );
};
