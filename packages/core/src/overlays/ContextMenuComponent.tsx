import * as React from 'react';
import { ThemeDefinition, ThemeProvider, TooltipPlacement } from '..';
import { Popover, PopoverOpenTrigger } from './Popover';
import { Overlay } from './Overlay';
import cxs from 'cxs';
import FocusTrap from 'focus-trap-react';

export interface ContextMenuComponentProps {
  offset: [number, number];
  menu: JSX.Element;
  theme?: ThemeDefinition;
}

interface State {
  offset: [number, number];
  menu: JSX.Element;
  theme?: ThemeDefinition;
  isOpen: boolean;
}

export class ContextMenuComponent extends React.Component<ContextMenuComponentProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      isOpen: true,
    };
  }

  public open(menu: JSX.Element, theme: ThemeDefinition, offset: [number, number]) {
    this.setState({ menu, theme, offset, isOpen: true });
  }

  public close() {
    this.setState({ isOpen: false });
  }

  public isOpen() {
    return this.state.isOpen;
  }

  render() {
    return (
      <Overlay
        renderBackdrop={true}
        closeOnClickBackdrop={true}
        closeOnEscape={true}
        isOpen={this.state.isOpen}
        onClose={() => this.close()}
        handleBackdropMouseDown={e => {
          if (e.nativeEvent.button === 3) {
            e.persist();
            e.preventDefault();
            setTimeout(() => {
              // https://github.com/palantir/blueprint/blob/develop/packages/core/src/components/context-menu/contextMenu.tsx#L107
              const newTarget = document.elementFromPoint(e.clientX, e.clientY);
              const { view, ...newEventInit } = e;
              newTarget?.dispatchEvent(new MouseEvent('contextmenu', newEventInit));
            });
          }
        }}
        renderContent={props => (
          <div
            style={{
              position: 'fixed',
              top: this.state.offset[0],
              left: this.state.offset[1],
            }}
            {...props}
          >
            <Popover
              key={(this.state.offset ?? []).join('_') || '__'}
              trigger={PopoverOpenTrigger.Manually}
              isOpen={true}
              placement={TooltipPlacement.BottomStart}
              noLeftPadding={true}
              interactiveDebounce={0}
              interactiveBorder={0}
              animationDuration={200}
              content={
                this.state.theme ? (
                  <ThemeProvider themeDefinition={this.state.theme}>
                    <div
                      className={cxs({
                        width: 'max-content',
                      })}
                    >
                      {this.state.menu}
                    </div>
                  </ThemeProvider>
                ) : (
                  this.state.menu
                )
              }
            >
              <div />
            </Popover>
          </div>
        )}
      />
    );
  }
}
