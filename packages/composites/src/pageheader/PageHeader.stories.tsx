import React from 'react';
import { Meta } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { IconName } from '@blackmaker/core';

export default {
  title: 'Composites/PageHeader',
  component: PageHeader,
} as Meta;

export const CompleteExample = () => (
  <PageHeader
    icon={IconName.Portrait}
    title="Millenium Falcon"
    description="Spaceship that can take the Kessel run in very few parsecs."
    breadcrumbs={[
      { href: '#', title: 'Repositories' },
      { href: '#', title: 'Blackmaker' },
      { href: '#', title: 'src' },
      { href: '#', title: 'index.ts' },
    ]}
    leftUpperActions={[
      { icon: IconName.ArrowLeft, tooltip: "Go back" },
      { icon: IconName.ArrowUpward, tooltip: "Go up" }
    ]}
  />
);
