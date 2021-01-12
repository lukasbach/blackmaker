import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { Hotkey } from '@react-hook/hotkey';
import { HotKeySingleKeyPreview } from './HotKeySingleKeyPreview';

export interface HotKeyPreviewProps {
  combination: Hotkey[];
}

export const HotKeyPreview: React.FC<HotKeyPreviewProps> = props => {
  const theme = useTheme();

  return (
    <div className={cxs({})}>
      { props.combination.map(key => (
        <HotKeySingleKeyPreview
          key={key}
          children={key}
        />
      )) }
    </div>
  );
};
