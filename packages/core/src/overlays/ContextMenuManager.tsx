import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeDefinition } from '../theming';
import { ContextMenuComponent, ContextMenuComponentProps } from './ContextMenuComponent';

class ContextMenuManagerClass {
  private component: ContextMenuComponent;
  private ctxPositionElement?: HTMLElement;

  public show(menu: JSX.Element, offset: [number, number], theme?: ThemeDefinition) {
    if (!this.ctxPositionElement) {
      this.ctxPositionElement = document.createElement('div');
      this.ctxPositionElement.classList.add('blackmaker-contextmenu');
      document.body.appendChild(this.ctxPositionElement);

      this.component = ReactDOM.render<ContextMenuComponentProps>(
        <ContextMenuComponent offset={offset} menu={menu} theme={theme} />,
        this.ctxPositionElement
      ) as ContextMenuComponent;
    }

    this.component.open(menu, theme, offset);
  }

  public hide() {
    this.component?.close();
  }

  public isOpen() {
    return this.component?.isOpen() || false;
  }
}

export const ContextMenuManager = new ContextMenuManagerClass();
