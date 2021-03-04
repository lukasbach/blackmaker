import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Button, Intent } from '..';
import { TabProps } from './Tab';
import { TabsContext } from './TabsContext';

export const ButtonTab = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, React.PropsWithChildren<TabProps>>((props, ref) => {
  const { onChangeTab, currentTab, onRegisterTab } = useContext(TabsContext);
  useEffect(() => onRegisterTab(props.id), [props.id, onRegisterTab]);
  return (
    <Button
      ref={ref}
      small={true}
      minimal={true}
      onClick={() => onChangeTab?.(props.id)}
      intent={props.intent}
      {...props.buttonProps}
      {...(currentTab === props.id && (props.activeButtonProps ?? { intent: Intent.Primary, active: true }))}
    >
      {props.children}
      {props.title ?? props.id}
    </Button>
  );
});
