import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { IconName, Intent } from '@blackmaker/core';
import { Helmet } from 'react-helmet';

export default {
  title: 'Composites/PageHeader',
  component: PageHeader,
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
    }
  ]
} as Meta;

export const CompleteExample = () => {
  const [tab, setTab] = useState("tab1");

  return (
    <PageHeader
      icon={IconName.Portrait}
      title="Millenium Falcon"
      description="Spaceship that can take the Kessel run in very few parsecs."
      breadcrumbs={[
        { href: '#', title: 'Transport' },
        { href: '#', title: 'Space Ships' },
        { href: '#', title: 'Rebel Alliance' },
        { title: 'Millenium Falcon', current: true },
      ]}
      actionsLeft={[
        { icon: IconName.ArrowBack, tooltip: "Go back" },
        { icon: IconName.ArrowUpward, tooltip: "Go up" }
      ]}
      actionsRight={[
        { text: "Cancel" },
        { icon: IconName.Save, text: "Save", intent: Intent.Primary },
      ]}
      actionsRight2={[
        { icon: IconName.Help, tooltip: "Open documentation", minimal: true }
      ]}
      tabs={[
        { id: "tab1", title: "Overview" },
        { id: "tab2", title: "Data Sheet" },
        { id: "tab3", title: "Images" },
        { id: "tab4", title: "Drivers" },
      ]}
      currentTab={tab}
      onChangeTab={setTab}
    />
  );
};

export const PageHeaderOverview = () => (
  <PageHeader
    icon={IconName.Portrait}
    title="title"
    description="description"
    breadcrumbs={<>breadcrumbs</>}
    actionsLeft={<>actionsLeft </>}
    actionsRight={<>actionsRight</>}
    actionsRight2={<>actionsRight2</>}
    tabs={<>tabs</>}
  />
);

export const OnlyTitleAndIcon = () => (
  <PageHeader
    icon={IconName.Portrait}
    title="Millenium Falcon"
  />
);

export const WithCloseButton = () => (
  <PageHeader
    icon={IconName.Portrait}
    title="Millenium Falcon"
    actionsRight2={[{
      icon: IconName.Close, tooltip: 'Close', minimal: true
    }]}
  />
);
