import * as React from 'react';
import { Icon, useTheme } from '..';
import cxs from 'cxs';
import { IconProps } from './Icon';
import { MaybeIcon } from './MaybeIcon';

export interface RenderMaybeIconProps {
  icon: MaybeIcon;
  iconProps?: Omit<IconProps, 'name'>;
}

export const RenderMaybeIcon: React.FC<RenderMaybeIconProps> = props => {
  const theme = useTheme();

  return (
    <>
      { props.icon && (typeof props.icon === 'string' ? (
        <Icon
          name={props.icon}
          {...(props.iconProps ?? {})}
        />
      ) : (
        props.icon
      )) }
    </>
  );
};
