import * as React from 'react';
import { useState } from 'react';
import { IconName, Intent, RoundButton, RoundButtonProps, TooltipPlacement } from '..';
import { ToolTip, ToolTipProps } from '../overlays/ToolTip';
import { Popover } from '../overlays/Popover';
import { useUniqueId } from '../common/useUniqueId';
import { VisuallyHidden } from '../common/components/VisuallyHidden';
import { CopyToClipboardProps } from './CopyToClipboardProps';

export interface CopyToClipboardButtonProps extends CopyToClipboardProps {
  toolTipProps?: Partial<ToolTipProps>;
  innerToolTipProps?: Partial<ToolTipProps>;
  buttonProps?: Partial<RoundButtonProps>;
}

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = props => {
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
    <Popover
      closeOnEscape={false}
      closeOnClickInside={false}
      closeOnClick={false}
      placement={TooltipPlacement.Right}
      interactiveDebounce={0}
      interactiveBorder={0}
      css={{
        cursor: props.cloneOnClick ? 'pointer' : undefined,
        ...props.toolTipProps?.css,
      }}
      elementProps={{
        onClick: props.cloneOnClick ? handler : undefined,
        ...props.toolTipProps?.elementProps,
      }}
      content={
        <ToolTip
          isOpen={hasCopied || undefined}
          content={
            hasCopied ? props.tooltipTextDone ?? 'Copied to clipboard!' : props.tooltipText ?? 'Copy to clipboard'
          }
          {...props.innerToolTipProps}
        >
          <RoundButton
            icon={hasCopied ? IconName.Done : IconName.Copy}
            intent={hasCopied ? Intent.Success : undefined}
            onClick={handler}
            {...props.buttonProps}
          />
        </ToolTip>
      }
      {...props.toolTipProps}
    >
      {props.children}
      <VisuallyHidden>
        <input id={id} value={props.textToCopy} readOnly={true} tabIndex={-1} />
      </VisuallyHidden>
    </Popover>
  );
};
