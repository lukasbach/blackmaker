import { RadioContainerProps } from './RadioContainer';
import React from 'react';

export const RadioContainerContext = React.createContext<RadioContainerProps & { groupName: string, currentValue?: string }>({ groupName: '__blackmaker_radiogroup_unknown' });
