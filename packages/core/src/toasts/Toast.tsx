import * as React from 'react';
import { useTheme } from '..';
import cxs from 'cxs';
import { ToastData, useToast } from './ToastContext';
import { NotificationContent } from '../notificationContent/NotificationContent';

export interface ToastProps {
  data: ToastData;
}

export const Toast: React.FC<ToastProps> = ({ data }) => {
  const theme = useTheme();
  const toasts = useToast();

  return (
    <div
      className={cxs({
        maxWidth: '500px',
        display: 'inline-block',
        borderRadius: theme.definition.borderRadiusRegular,
        backgroundColor: theme.getColor(data.intent),
        pointerEvents: 'all',
        margin: '8px 0',
        ...theme.cssShadow(3),
      })}
    >
      {data.customContent ?? (
        <NotificationContent
          {...data}
          size={'small'}
          textColor={theme.getTextColorOnBrandColors(data.intent)}
          titleColor={theme.getTextColorOnBrandColors(data.intent)}
          iconColor={theme.getTextColorOnBrandColors(data.intent)}
          onClose={
            data.closable ?? true
              ? () => {
                  data.onClose?.();
                  toasts.closeToast(data);
                }
              : undefined
          }
        />
      )}
    </div>
  );
};
