import * as React from 'react';
import { IconName, Intent, MaybeIcon, RenderMaybeIcon, RoundButton, switchEnum, useTheme } from '..';
import cxs from 'cxs';

export interface NotificationContentProps {
  icon?: MaybeIcon;
  title?: string | JSX.Element;
  text?: string | JSX.Element;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onClose?: () => any;
  size?: 'tiny' | 'small' | 'normal' | 'large' | 'x-large';
  titleColor?: string;
  textColor?: string;
  iconColor?: string;
  closeButtonIntent?: Intent;
}

export const NotificationContent: React.FC<NotificationContentProps> = props => {
  const theme = useTheme();
  const TitleElement = `h${props.headingLevel ?? 1}` as 'h1';

  return (
    <div
      className={cxs({
        color: props.textColor,
        padding: '.8em',
        display: 'flex',
        fontSize: switchEnum(
          props.size,
          [
            ['tiny', '.7em'],
            ['small', '.85em'],
            ['normal', '1em'],
            ['large', '1.2em'],
            ['x-large', '1.4em'],
          ],
          '1em'
        ),
      })}
    >
      {props.icon && (
        <div>
          <RenderMaybeIcon
            icon={props.icon}
            iconProps={{
              size: '2em',
              marginRight: '.4em',
              color: props.iconColor,
            }}
          />
        </div>
      )}
      <div
        className={cxs({
          flexGrow: 1,
        })}
      >
        {props.title && (
          <TitleElement
            className={cxs({
              fontSize: '1.4em',
              margin: '.1em 0 .4em 0',
              color: props.titleColor,
            })}
          >
            {props.title}
          </TitleElement>
        )}
        {props.children}
        {props.text}
      </div>
      {props.onClose && (
        <div className={cxs({ margin: '-.3em' })}>
          <RoundButton icon={IconName.Close} onClick={props.onClose} intent={props.closeButtonIntent} size={'10px'} />
        </div>
      )}
    </div>
  );
};
