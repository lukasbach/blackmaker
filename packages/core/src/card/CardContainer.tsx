import * as React from 'react';
import { HtmlElementProps, useTheme } from '..';
import cxs from 'cxs';
import Color from 'color';
import { MouseEvent, useState } from 'react';

export interface CardContainerProps extends HtmlElementProps {
  shadow?: number;
  interactive?: boolean;
  onClick?: () => any;
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => any;
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => any;
}

export const CardContainerContext = React.createContext({
  hovering: false
});

export const CardContainer: React.FC<CardContainerProps> = props => {
  const theme = useTheme();
  const [isHovering, setIsHovering] = useState(false);

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
      className={ cxs({
        display: 'inline-block',
        backgroundColor: theme.definition.primaryBackgroundColor,
        border: `1px solid ${new Color(theme.definition.primaryBackgroundColor).darken(.2)}`,
        borderRadius: theme.definition.borderRadiusRegular,
        overflow: 'hidden',
        cursor: props.interactive && 'pointer',
        ...theme.cssShadow(props.shadow),
        ...props.css
      }) }
      {...props.elementProps}
    >
      { props.interactive ? (
        <CardContainerContext.Provider value={{ hovering: isHovering }}>
          { props.children }
        </CardContainerContext.Provider>
      ) : (
        props.children
      ) }
    </div>
  );
};
