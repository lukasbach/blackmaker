import * as React from 'react';
import { Button, Icon, IconName, Intent, useTheme } from '../..';
import { Dialog } from '../Dialog';
import cxs from 'cxs';
import { CardArea } from '../../card/CardArea';
import { Paragraph } from '../../typography/Paragraph';

export interface AlertProps {
  title?: string;
  content?: string | JSX.Element;
  icon?: IconName;
  intent?: Intent;
  isOpen: boolean;
  onCancel?: () => any;
  onConfirm?: () => any;
  onClose?: () => any;
  cancelButtonText?: string;
  confirmButtonText?: string;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  closeButton?: boolean;
}

export const Alert: React.FC<AlertProps> = props => {
  return (
    <Dialog
      isOpen={props.isOpen}
      title={props.title}
      titleIntent={props.intent}
      highlightedTitle={true}
      onClose={() => {
        props.onClose?.();
        props.onCancel?.();
      }}
      closeOnEscape={props.closeOnEscape ?? true}
      closeOnBackdrop={props.closeOnBackdrop ?? true}
      closeButton={props.closeButton ?? true}
      icon={props.icon}
      footerAlignRight={true}
      css={{ maxWidth: '400px' }}
      footer={
        <>
          <Button
            minimal={!!props.onConfirm}
            intent={!props.onConfirm && Intent.Primary}
            onClick={() => {
              props.onClose?.();
              props.onCancel?.();
            }}
          >
            {props.cancelButtonText ?? (props.onConfirm ? 'Cancel' : 'Okay')}
          </Button>
          {props.onConfirm && (
            <Button
              intent={props.intent ?? Intent.Primary}
              onClick={() => {
                props.onClose?.();
                props.onConfirm?.();
              }}
            >
              {props.confirmButtonText ?? 'Confirm'}
            </Button>
          )}
        </>
      }
    >
      <CardArea icon={!props.title && props.icon}>
        {props.children}
        {props.content}
      </CardArea>
    </Dialog>
  );
};
