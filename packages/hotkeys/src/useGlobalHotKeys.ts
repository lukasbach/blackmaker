import { useContext } from 'react';
import { GlobalHotKeyContext } from './GlobalHotKeyContext';

export const useGlobalHotKeys = () => useContext(GlobalHotKeyContext);
