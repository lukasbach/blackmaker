import React from 'react';
import { useState } from 'react';
import { Alert, AlertProps } from './Alert';

export const useAlert = () => {
  const [currentAlert, setCurrentAlert] = useState<AlertProps>();

  return [
    (alert: Omit<AlertProps, 'isOpen'>) => {
      setCurrentAlert({
        ...alert,
        isOpen: true,
        onClose: () => {
          setCurrentAlert(a => ({ ...a, isOpen: false }));
        },
      });
    },
    currentAlert ? <Alert {...currentAlert} /> : null,
  ] as const;
};
