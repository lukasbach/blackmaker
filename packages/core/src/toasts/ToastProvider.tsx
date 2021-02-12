import * as React from 'react';
import { switchEnum, useTheme } from '..';
import cxs from 'cxs';
import { ToastContext, ToastData } from './ToastContext';
import { useState } from 'react';
import { Overlay } from '../overlays/Overlay';
import { Toast } from './Toast';

export interface ToastProviderProps {
  verticalOrientation?: 'left' | 'center' | 'right';
  horizontalOrientation?: 'top' | 'bottom';
}

export const ToastProvider: React.FC<ToastProviderProps> = props => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const horizontalOrientation = props.horizontalOrientation ?? 'top';
  const verticalOrientation = props.verticalOrientation ?? 'right';

  return (
    <ToastContext.Provider
      value={{
        ...props,
        openToasts: toasts,
        horizontalOrientation: horizontalOrientation,
        verticalOrientation: verticalOrientation,
        toast: data => setToasts(t => [...t, data]),
        closeToast: toastToRemove => setToasts(t => t.filter(toast => toast !== toastToRemove)),
      }}
    >
      {props.children}
      {toasts.length > 0 && (
        <Overlay
          renderBackdrop={true}
          noPointerEvents={true}
          closeOnEscape={false}
          closeOnClickBackdrop={false}
          centerWithinBackdrop={false}
          isOpen={true}
          renderContent={divProps => (
            <div
              {...divProps}
              className={cxs({
                display: 'flex',
                flexDirection: 'column',
                margin: '16px 24px',
                alignItems: switchEnum(verticalOrientation, [
                  ['left', 'flex-start'],
                  ['center', 'center'],
                  ['right', 'flex-end'],
                ]),
                justifyContent: switchEnum(horizontalOrientation, [
                  ['top', 'flex-start'],
                  ['bottom', 'flex-end'],
                ]),
              })}
            >
              {toasts.map(t => (
                <Toast data={t} />
              ))}
            </div>
          )}
        />
      )}
    </ToastContext.Provider>
  );
};
