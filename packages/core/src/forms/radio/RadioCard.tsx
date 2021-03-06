import * as React from 'react';
import { useContext, useRef } from 'react';
import { darken, HtmlElementProps, Icon, IconName, useTheme } from '../..';
import cxs from 'cxs';
import { RadioProps } from './Radio';
import { CardContainer, CardContainerProps } from '../../card/CardContainer';
import { RadioContainerContext } from './RadioContainerContext';
import { VisuallyHidden } from '../../common/components/VisuallyHidden';

export interface RadioCardProps
  extends Omit<RadioProps, 'elementProps' | 'css'>,
    Omit<CardContainerProps, 'elementProps' | 'css'>,
    HtmlElementProps<HTMLLabelElement> {
  renderContent?: (checked: boolean) => JSX.Element;
}

export const RadioCard: React.FC<RadioCardProps> = props => {
  const theme = useTheme();
  const containerProps = useContext(RadioContainerContext);
  const radioButton = useRef<HTMLInputElement>(null);
  const checked = containerProps.currentValue === props.value;

  return (
    <label
      className={cxs({
        position: 'relative',
        display: 'block',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        margin: '.5em',
        ...props.css,
      })}
      {...props.elementProps}
    >
      <VisuallyHidden>
        <input
          ref={radioButton}
          type="radio"
          name={containerProps.groupName}
          value={props.value}
          disabled={props.disabled}
          onChange={e => {
            containerProps.onChange?.(e, e.target.value);
          }}
        />
      </VisuallyHidden>
      <CardContainer
        interactive={true}
        {...props}
        elementProps={undefined}
        css={{
          display: 'block',
        }}
      >
        {props.children}
        {props.renderContent?.(checked)}
      </CardContainer>
      <div
        className={cxs({
          position: 'absolute',
          top: '-.5em',
          right: '-.5em',
          opacity: checked ? 1 : 0,
          transition: '.2s opacity ease',
          width: '3em',
          height: '3em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '9999px',
          backgroundColor: darken(theme.definition.primaryBackgroundColor, 0.3),
        })}
      >
        <Icon name={IconName.Check} color={theme.definition.textHightlightColor} size="2.5em" />
      </div>
    </label>
  );
};
