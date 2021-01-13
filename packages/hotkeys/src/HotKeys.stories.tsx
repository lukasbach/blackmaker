import React, { useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { HotKeyPreview } from './HotKeyPreview';
import { useHotKey } from './useHotKey';
import { useRecordHotKey } from './useRecordHotKey';
import { Button, IconName, Intent } from '@blackmaker/core';
import { GlobalHotKeyProvider } from './GlobalHotKeyProvider';
import { Hotkey } from '@react-hook/hotkey/src/index';
import { CardContainer } from '@blackmaker/core/out/card/CardContainer';
import { CardArea } from '@blackmaker/core/out/card/CardArea';
import { HotKeyConfiguration } from './HotKeyConfiguration';

export default {
  title: 'HotKeys/HotKeys',
  component: HotKeyPreview,
} as Meta;

export const useHotKeyExample: React.FC = () => {
  const [_, ctrlc] = useHotKey({ combination: [ 'ctrl', 'c' ] });
  const [_2, ctrlaltc] = useHotKey({ combination: [ 'ctrl', 'alt', 'c' ] });
  return (
    <div>
      <Button intent={ctrlc ? Intent.Success : Intent.Default}>CTRL + C</Button>
      <Button intent={ctrlaltc ? Intent.Success : Intent.Default}>CTRL + ALT + C</Button>
    </div>
  )
};

export const localHotkeyExample: React.FC = () => {
  const ref = useRef();
  const [_, up] = useHotKey({ combination: [ 'up' ], ref });
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
);

export const GlobalHotKeyStore: React.FC = () => {
  const Child: React.FC<{ keyId: string }> = props => {
    const [hotkey, isPressed] = useHotKey(props.keyId, e => {
      e.preventDefault();
      e.stopPropagation();
    });
    const [record, isRecording] = useRecordHotKey(undefined, props.keyId);

    return (
      <CardContainer css={{ marginRight: '1em' }}>
        <CardArea header={true} intent={isPressed ? Intent.Primary : undefined}>
          { hotkey.title }
        </CardArea>
        <CardArea>
          <HotKeyPreview combination={hotkey.combination} />
        </CardArea>
        <CardArea muted={true}>
          <Button
            intent={isRecording ? Intent.Primary : Intent.Default}
            onClick={record}
          >
            { isRecording ? 'Press new hotkeys...' : 'Click to change' }
          </Button>
        </CardArea>
      </CardContainer>
    )
  };

  const [userSetting, setUserSetting] = useState<{[ hotkeyId: string ]: Hotkey | Hotkey[]}>({});
  const hotkeys: HotKeyConfiguration[] = [
    {
      id: 'copy',
      combination: ['ctrl', 'c'],
      title: 'Copy something',
      global: true,
    },
    {
      id: 'paste',
      combination: ['ctrl', 'v'],
      title: 'Paste something',
      global: true,
    },
    {
      id: 'selectall',
      combination: ['ctrl', 'a'],
      title: 'Select All',
      global: true,
    },
  ];

  return (
    <GlobalHotKeyProvider
      userSetting={userSetting}
      onChange={(id, combination) => {
        setUserSetting({...userSetting, [id]: combination});
      }}
      hotkeys={hotkeys}
    >
      { hotkeys.map(hotkey => <Child keyId={hotkey.id} />) }
    </GlobalHotKeyProvider>
  )
};
