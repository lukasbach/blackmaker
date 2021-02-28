import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { SideNavigation } from './SideNavigation';
import { BackgroundColor, Box, Flex, Icon, IconName } from '@blackmaker/core';
import { Helmet } from 'react-helmet';

export default {
  title: 'Composites/SideNavigation',
  component: SideNavigation,
  decorators: [
    Story => {
      return (
        <>
          <Helmet>
            <style>{' .story-inner { padding: 0 !important; } '}</style>
          </Helmet>
          <Story />
        </>
      );
    },
  ],
} as Meta;

export const CompleteExample = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <SideNavigation
      items={[
        <Flex height="5em" alignItems="center" justifyContent="center">
          <Icon name={IconName.Face} size="3em" />
        </Flex>,
        'Hello there!',
        { text: 'Home', icon: IconName.Home },
        { text: 'Backups', icon: IconName.Backup },
        { text: 'Data Usage', icon: IconName.DataUsage, selected: true },
        'More items',
        { text: 'Settings', icon: IconName.Settings },
        { text: 'Builds', icon: IconName.Build },
      ]}
      isCollapsed={collapsed}
      onChangeCollapsed={setCollapsed}
      width={200}
    />
  );
};

export const DifferentBackgroundColors = () => {
  const [collapsed, setCollapsed] = useState<any>({});
  console.log(collapsed);

  return (
    <Flex height="100%">
      {[
        BackgroundColor.Primary,
        BackgroundColor.Secondary,
        BackgroundColor.Tertiary,
        BackgroundColor.Menu,
        '#0c7e8c',
      ].map(color => (
        <SideNavigation
          key={color}
          background={color}
          items={[
            `Color ${color}`,
            { text: 'Home', icon: IconName.Home },
            { text: 'Backups', icon: IconName.Backup },
            { text: 'Data Usage', icon: IconName.DataUsage, selected: true },
            'More items',
            { text: 'Settings', icon: IconName.Settings },
            { text: 'Builds', icon: IconName.Build },
          ]}
          isCollapsed={!!collapsed[color]}
          onChangeCollapsed={c => setCollapsed({ ...collapsed, [color]: c })}
          width={200}
        />
      ))}
    </Flex>
  );
};
