import * as React from 'react';
import { IconName, useTheme } from '..';
import cxs from 'cxs';
import { RoundButton } from '../button/RoundButton';

export interface OverlayCloseButtonProps {
  onClick?: () => any;
}

export const OverlayCloseButton: React.FC<OverlayCloseButtonProps> = props => {
  return (
    <div
      className={ cxs({
        position: 'relative',
        overflow: 'visible'
      }) }
    >
      <div
        className={ cxs({
          position: 'absolute',
          right: '-60px',
          top: '0px'
        }) }
      >
        <RoundButton
          icon={IconName.Close}
          size={2}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};
