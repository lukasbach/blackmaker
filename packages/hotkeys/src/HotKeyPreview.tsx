import * as React from 'react';
import { Hotkey } from '@react-hook/hotkey';
import { HotKeySingleKeyPreview } from './HotKeySingleKeyPreview';

export interface HotKeyPreviewProps {
  combination: Hotkey[] | Hotkey;
}

export const HotKeyPreview: React.FC<HotKeyPreviewProps> = props => {
  const combination = Array.isArray(props.combination) ? props.combination : [props.combination];

  return (
    <>
      {combination.map(key => (
        <HotKeySingleKeyPreview key={key} children={key} />
      ))}
    </>
  );
};
