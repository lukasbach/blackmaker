import * as React from 'react';
import { ButtonProps, Intent } from '..';
import { TabsStyle } from './TabsStyle';
import { ButtonTab } from './ButtonTab';
import { UnderlinedTab } from './UnderlinedTab';
import { useContext, useEffect, useRef } from 'react';
import { TabsContext } from './TabsContext';

export interface TabProps {
  id: string;
  buttonProps?: Partial<ButtonProps>;
  activeButtonProps?: Partial<ButtonProps>;
  tabStyle?: TabsStyle;
  title?: string | JSX.Element;
  intent?: Intent;
}

export const Tab: React.FC<TabProps> = props => {
  const ctxProps = useContext(TabsContext);
  const tabStyle = props.tabStyle ?? ctxProps.tabStyle;
  const tabRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (ctxProps.currentTab === props.id) {
      tabRef.current?.focus();
    }
  }, [ctxProps.currentTab]);

  switch (tabStyle) {
    case TabsStyle.Buttons:
      return <ButtonTab {...ctxProps} ref={tabRef} children={undefined} {...props} />;
    case TabsStyle.Underlined:
    default:
      return <UnderlinedTab {...ctxProps} ref={tabRef as any} children={undefined} {...props} />;
  }
};
