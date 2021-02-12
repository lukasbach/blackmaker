import * as React from 'react';
import { switchEnum, useTheme } from '..';
import cxs from 'cxs';
import { ToastContext, ToastContextValue, ToastData } from './ToastContext';
import { useState } from 'react';
import { Overlay } from '../overlays/Overlay';
import { Toast } from './Toast';

let toastCounter = 0;

export interface ToastProviderProps extends Pick<ToastContextValue, 'verticalOrientation' | 'horizontalOrientation' | 'animationDuration' | 'closeAfter'>{
}

export const ToastProvider: React.FC<ToastProviderProps> = props => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const horizontalOrientation = props.horizontalOrientation ?? 'right';
  const verticalOrientation = props.verticalOrientation ?? 'top';

  return (
    <ToastContext.Provider
      value={{
        ...props,
        openToasts: toasts,
        horizontalOrientation: horizontalOrientation,
        verticalOrientation: verticalOrientation,
        animationDuration: props.animationDuration,
        toast: data => {
          const id = (data as any).id ?? `toast${toastCounter++}`;
          setToasts(t => [...t, {closeAfter: props.closeAfter, ...data, id}]);
          return id;
        },
        closeToast: toastToRemove => setToasts(t => t.filter(toast => toast.id !== toastToRemove)),
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
                padding: '16px 24px',
                height: '100%',
                boxSizing: 'border-box',
                alignItems: switchEnum(horizontalOrientation, [
                  ['left', 'flex-start'],
                  ['center', 'center'],
                  ['right', 'flex-end'],
                ]),
                justifyContent: switchEnum(verticalOrientation, [
                  ['top', 'flex-start'],
                  ['bottom', 'flex-end'],
                ]),
              })}
            >
              {toasts.map(t => (
                <Toast data={t} key={t.id} />
              ))}
            </div>
          )}
        />
      )}
    </ToastContext.Provider>
  );
};
