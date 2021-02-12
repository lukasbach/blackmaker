import React, { useContext } from 'react';
import { NotificationContentProps } from '../notificationContent/NotificationContent';
import { Intent } from '../common';

export interface ToastData
  extends Omit<NotificationContentProps, 'closeButtonIntent' | 'textColor' | 'titleColor' | 'iconColor'> {
  customContent?: JSX.Element;
  intent?: Intent;
  closable?: boolean;
}

export interface ToastContextValue {
  toast: (data: ToastData) => void;
  closeToast: (data: ToastData) => void;
  verticalOrientation: 'left' | 'center' | 'right';
  horizontalOrientation: 'top' | 'bottom';
  openToasts: ToastData[];
}

export const ToastContext = React.createContext<ToastContextValue>({
  toast: () => {},
  closeToast: () => {},
  verticalOrientation: 'right',
  horizontalOrientation: 'top',
  openToasts: [],
});

export const useToast = () => useContext(ToastContext);
