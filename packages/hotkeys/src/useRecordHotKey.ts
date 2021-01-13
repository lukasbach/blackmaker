import { useRef, useState } from 'react';
import { Hotkey } from '@react-hook/hotkey';
import { useGlobalHotKeys } from './useGlobalHotKeys';

export const useRecordHotKey = (
  onRecord?: (hotkey: Hotkey[]) => any,
  storeUnderHotKeyId?: string,
) => {
  const globalHotKeys = useGlobalHotKeys();
  const isRecording = useRef(false);
  const [isRecordingState, setIsRecordingState] = useState(false);

  return [
    async () => {
      isRecording.current = true;
      setIsRecordingState(true);
      const keys: Hotkey[] = [];

      const keydownListener = (e: KeyboardEvent) => {
        if (isRecording.current) {
          e.preventDefault();
          e.stopPropagation();
          const key = e.key.toLowerCase() as Hotkey;
          if (!keys.includes(key)) {
            keys.push(key);
          }
        }
      };

      const keyUpListener = (e: KeyboardEvent) => {
        if (isRecording.current) {
          e.preventDefault();
          e.stopPropagation();
          isRecording.current = false;
          setIsRecordingState(false);
          document.removeEventListener('keydown', keydownListener);
          document.removeEventListener('keyup', keyUpListener);
          onRecord?.(keys);

          if (storeUnderHotKeyId) {
            globalHotKeys.onChange(storeUnderHotKeyId, keys);
          }
        }
      };

      document.addEventListener('keydown', keydownListener);
      document.addEventListener('keyup', keyUpListener);
    },
    isRecordingState
  ] as const;
}
