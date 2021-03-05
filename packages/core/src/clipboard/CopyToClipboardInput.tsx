import * as React from 'react';
import { Button, ButtonProps, IconName, Intent } from '..';
import { CopyToClipboardProps } from './CopyToClipboardProps';
import { TextInput, TextInputProps } from '../forms/textinput/TextInput';
import { ToolTip, ToolTipProps } from '../overlays/ToolTip';
import { useState } from 'react';
import { useUniqueId } from '../common/useUniqueId';

export interface CopyToClipboardInputProps extends Omit<CopyToClipboardProps, 'textToCopy'>, TextInputProps {
  toolTipProps?: ToolTipProps;
  buttonProps?: ButtonProps;
}

export const CopyToClipboardInput: React.FC<CopyToClipboardInputProps> = props => {
  const id = useUniqueId(props.inputId ?? '__blackmaker_clipboard_input');
  const [hasCopied, setHasCopied] = useState(false);

  const handler = () => {
    if (!hasCopied) {
      const element = document.getElementById(id) as HTMLInputElement;
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy');
      setHasCopied(true);
      setTimeout(() => {
        setHasCopied(false);
      }, props.hasCopiedStateDuration ?? 1000);
    }
  };

  return (
    <TextInput
      {...props}
      inputId={id}
      intent={hasCopied ? Intent.Success : undefined}
      elementProps={{
        onClick: props.cloneOnClick ? handler : undefined,
      }}
      rightElement={
        <ToolTip
          content={
            hasCopied ? props.tooltipTextDone ?? 'Copied to clipboard!' : props.tooltipText ?? 'Copy to clipboard'
          }
          {...props.toolTipProps}
        >
          <Button
            minimal={true}
            icon={hasCopied ? IconName.Done : IconName.ContentCopy}
            intent={hasCopied ? Intent.Success : undefined}
            onClick={handler}
            {...props.buttonProps}
          />
        </ToolTip>
      }
    />
  );
};
