import * as React from 'react';
import { Icon, IconName, useTheme } from '..';
import { IconProps } from './Icon';
import { MaybeIcon } from './MaybeIcon';

export interface RenderMaybeIconProps {
  icon: MaybeIcon;
  iconProps?: Omit<IconProps, 'name'>;
}

export const RenderMaybeIcon: React.FC<RenderMaybeIconProps> = props => {
  return (
    <>
      {props.icon &&
        (typeof props.icon === 'string' ? (
          <Icon name={props.icon as IconName} {...(props.iconProps ?? {})} />
        ) : (
          props.icon
        ))}
    </>
  );
};
