import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { SideNavigation } from './SideNavigation';
import { BackgroundColor, Flex, Icon, IconName, Paragraph, Tag, TextInput } from '@blackmaker/core';
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
        <TextInput
          placeholder="Search"
          leftElement={IconName.Search}
          rightElement={<Tag content="&nbsp;/&nbsp;" />}
          fill={true}
          small={true}
        />,
        'Hello there!',
        { text: 'Home', icon: IconName.Home },
        { text: 'Backups', icon: IconName.Backup },
        { text: 'Data Usage', icon: IconName.DataUsage, selected: true },
        'More items',
        { text: 'Settings', icon: IconName.Settings },
        { text: 'Builds', icon: IconName.Build },
      ]}
      contentAfterItems={
        <Paragraph small={true} muted={true} css={{ marginTop: '.5em', textAlign: 'center' }}>
          &copy; 2021 John Doe
        </Paragraph>
      }
      bottomItems={[
        'Items at the bottom',
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
          css={color === '#0c7e8c' && { ' *': { color: '#fff !important' } }}
        />
      ))}
    </Flex>
  );
};
