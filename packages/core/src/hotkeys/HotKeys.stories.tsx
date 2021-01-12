import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { HotKeyPreview } from './HotKeyPreview';
import { useHotKey } from './useHotKey';
import { Button } from '../button/Button';
import { Intent } from '../common';
import { useRecordHotKey } from './useRecordHotKey';
import { IconName } from '../../out';

export default {
  title: 'Core/Misc/HotKeys',
  component: HotKeyPreview,
} as Meta;

export const useHotKeyExample: React.FC = () => {
  const ctrlc = useHotKey({ combination: [ 'ctrl', 'c' ] });
  const ctrlaltc = useHotKey({ combination: [ 'ctrl', 'alt', 'c' ] });
  return (
    <div>
      <Button intent={ctrlc ? Intent.Success : Intent.Default}>CTRL + C</Button>
      <Button intent={ctrlaltc ? Intent.Success : Intent.Default}>CTRL + ALT + C</Button>
    </div>
  )
};

export const localHotkeyExample: React.FC = () => {
  const ref = useRef();
  const up = useHotKey({ combination: [ 'up' ], ref });
  return (
    <div>
      <Button intent={up ? Intent.Success : Intent.Default} elementProps={{ ref }}>Press up while focusing this button</Button>
      <p>Hotkey only works when the button above is focused. Focus it (e.g. by clicking on it), then press the up-key.</p>
    </div>
  )
};

export const useRecordHotKeyExample: React.FC = () => {
  const [lastHotkeys, setLastHotkeys] = useState([]);
  const [record, recording] = useRecordHotKey(setLastHotkeys);
  return (
    <div>
      <Button onClick={record} intent={recording ? Intent.Success : Intent.Default} icon={IconName.Keyboard}>
        { recording ? 'Recording...' : 'Start recording' }
      </Button>
      <HotKeyPreview combination={lastHotkeys} />
    </div>
  )
};

export const HotKeyPreviewExample: React.FC = () => (
  <div>
    <div><HotKeyPreview combination={[ 'shift', 'c' ]} /></div>
    <div><HotKeyPreview combination={[ 'shift', 'alt', 'enter' ]} /></div>
    <div><HotKeyPreview combination={[ 'pagedown' ]} /></div>
    <div><HotKeyPreview combination={[ 'alt', 'down' ]} /></div>
  </div>
)
