import * as React from 'react';
import { useContext } from 'react';
import { Button, Intent } from '..';
import { TabProps } from './Tab';
import { TabsContext } from './TabsContext';

export const ButtonTab: React.FC<TabProps> = props => {
  const { onChangeTab, currentTab } = useContext(TabsContext);
  return (
    <Button
      small={true}
      minimal={true}
      onClick={() => onChangeTab?.(props.id)}
      intent={props.intent}
      {...props.buttonProps}
      {...(currentTab === props.id && (props.activeButtonProps ?? { intent: Intent.Primary, active: true }))}
    >
      {props.children}
      {props.title}
    </Button>
  );
};
