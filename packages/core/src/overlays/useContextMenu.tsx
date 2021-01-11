import { useTheme } from '../theming';
import * as React from 'react';
import { ContextMenuManager } from './ContextMenuManager';

export const useContextMenu = (
  menu: JSX.Element
): {
  contextMenuProps: Partial<React.HTMLAttributes<HTMLElement>>;
  closeContextMenu: () => void;
} => {
  const theme = useTheme();

  return {
    contextMenuProps: {
      onContextMenu: e => {
        e.stopPropagation();
        e.preventDefault();
        ContextMenuManager.show(menu, [e.clientY, e.clientX], theme.definition);
      },
    },
    closeContextMenu: () => {
      ContextMenuManager.hide();
    },
  };
};
