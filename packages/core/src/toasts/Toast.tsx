import * as React from 'react';
import { useEffect, useState } from 'react';
import { TooltipPlacement, useTheme } from '..';
import cxs from 'cxs';
import { ToastData, useToast } from './ToastContext';
import { NotificationContent } from '../notificationContent/NotificationContent';
import { getPopoverInitialTransform } from '../overlays/getPopoverInitialTransform';

export interface ToastProps {
  data: ToastData;
}

export const Toast: React.FC<ToastProps> = ({ data }) => {
  const theme = useTheme();
  const {
    verticalOrientation,
    horizontalOrientation,
    animationDuration: animationDurationMaybe,
    closeToast,
  } = useToast();
  const [isVisibleDelayed, setIsVisibleDelayed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const animationDuration = animationDurationMaybe ?? 500;
  useEffect(() => setIsVisibleDelayed(true), []);
  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        data.onClose?.();
        closeToast(data.id);
      }, animationDuration);
    }
  }, [isClosing]);
  useEffect(() => {
    if (data.closeAfter) {
      setTimeout(() => {
        // TODO pause closing when hovering
        setIsClosing?.(true);
      }, data.closeAfter);
    }
  }, []);

  let transform = 'none';
  const translation = 20;
  const scale = 0.8;

  switch (horizontalOrientation) {
    case 'left':
      transform = getPopoverInitialTransform(TooltipPlacement.Right, translation, scale);
      break;
    case 'center':
      transform = getPopoverInitialTransform(
        verticalOrientation === 'top' ? TooltipPlacement.Bottom : TooltipPlacement.Top,
        translation,
        scale
      );
      break;
    case 'right':
      transform = getPopoverInitialTransform(TooltipPlacement.Left, translation, scale);
      break;
  }

  return (
    <div
      className={cxs({
        maxWidth: '500px',
        display: 'inline-block',
        borderRadius: theme.definition.borderRadiusRegular,
        backgroundColor: theme.getColor(data.intent),
        pointerEvents: 'all',
        margin: '8px 0',
        overflow: 'hidden',
        maxHeight: '0 !important',
        transition: `${animationDuration}ms all ease`,
        opacity: 0,
        transform,
        ...(isVisibleDelayed &&
          !isClosing && {
            maxHeight: '9999px',
            opacity: 1,
            transform: 'none',
          }),
        ...(isClosing && {
          maxHeight: '0 !important',
        }),
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
                  setIsClosing(true);
                }
              : undefined
          }
        />
      )}
    </div>
  );
};
