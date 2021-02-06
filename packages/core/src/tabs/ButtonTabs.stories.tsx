import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabsStyle } from './TabsStyle';
import { Tab } from './Tab';
import { IconName, Intent } from '../../out';
import { ButtonGroup } from '../button';

export default {
  title: 'Core/Components/Tabs/Button Tabs',
  component: Tabs,
} as Meta;

export const StaticTabs = () => (
  <div>
    <Tabs tabStyle={TabsStyle.Buttons} currentTab="tab1">
      <Tab id="tab1" title="Tab 1" />
      <Tab id="tab2" title="Tab 2" />
      <Tab id="tab3" title="Tab 3" />
    </Tabs>
  </div>
);

export const StatefulTabs = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <div>
      <Tabs tabStyle={TabsStyle.Buttons} currentTab={tab} onChangeTab={setTab}>
        <Tab id="tab1" title="Tab 1" />
        <Tab id="tab2" title="Tab 2" />
        <Tab id="tab3" title="Tab 3" />
      </Tabs>
    </div>
  );
};

export const CustomActiveButton = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <div>
      <Tabs
        tabStyle={TabsStyle.Buttons}
        currentTab={tab}
        onChangeTab={setTab}
        buttonProps={{
          icon: IconName.ChevronRight,
          small: false,
          minimal: false,
        }}
        activeButtonProps={{
          intent: Intent.Success,
          icon: IconName.Check,
          active: true,
        }}
      >
        <Tab id="tab1" title="Tab 1" />
        <Tab id="tab2" title="Tab 2" />
        <Tab id="tab3" title="Tab 3" />
      </Tabs>
    </div>
  );
};

export const GroupedButtons = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <ButtonGroup>
      <Tabs
        tabStyle={TabsStyle.Buttons}
        currentTab={tab}
        onChangeTab={setTab}
        buttonProps={{
          small: false,
          minimal: false,
        }}
        activeButtonProps={{
          intent: Intent.Primary,
        }}
      >
        <Tab id="tab1" title="Tab 1" />
        <Tab id="tab2" title="Tab 2" />
        <Tab id="tab3" title="Tab 3" />
      </Tabs>
    </ButtonGroup>
  );
};
