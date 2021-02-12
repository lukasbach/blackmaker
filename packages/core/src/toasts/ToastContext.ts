import React, { useContext } from 'react';
import { NotificationContentProps } from '../notificationContent/NotificationContent';
import { Intent } from '../common';

export interface ToastData
  extends Omit<NotificationContentProps, 'closeButtonIntent' | 'textColor' | 'titleColor' | 'iconColor'> {
  id: string;
  customContent?: JSX.Element;
  intent?: Intent;
  closable?: boolean;
  closeAfter?: number;
}

export interface ToastContextValue {
  toast: (data: Omit<ToastData, 'id'>) => string;
  closeToast: (toastId: string) => void;
  verticalOrientation: 'top' | 'bottom';
  horizontalOrientation: 'left' | 'center' | 'right';
  openToasts: ToastData[];
  animationDuration?: number;
  closeAfter?: number;
}

export const ToastContext = React.createContext<ToastContextValue>({
  toast: () => '',
  closeToast: () => {},
  verticalOrientation: 'top',
  horizontalOrientation: 'right',
  openToasts: [],
});

export const useToast = () => useContext(ToastContext);
