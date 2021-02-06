import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabsStyle } from './TabsStyle';
import { Tab } from './Tab';
import { intents } from '../common/intents';

export default {
  title: 'Core/Components/Tabs/Underlined Tabs',
  component: Tabs,
} as Meta;

export const StaticTabs = () => (
  <div>
    <Tabs tabStyle={TabsStyle.Underlined} currentTab="tab1">
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
      <Tabs tabStyle={TabsStyle.Underlined} currentTab={tab} onChangeTab={setTab}>
        <Tab id="tab1" title="Tab 1" />
        <Tab id="tab2" title="Tab 2" />
        <Tab id="tab3" title="Tab 3" />
      </Tabs>
    </div>
  );
};

export const TabsWithIntents = () => {
  const [tab, setTab] = useState('tab1');
  return (
    <div>
      {intents.map(intent => (
        <div>
          <Tabs tabStyle={TabsStyle.Underlined} currentTab={tab} onChangeTab={setTab} intent={intent} key={intent}>
            <Tab id="tab1" title="Tab 1" />
            <Tab id="tab2" title="Tab 2" />
            <Tab id="tab3" title="Tab 3" />
          </Tabs>
        </div>
      ))}
    </div>
  );
};
