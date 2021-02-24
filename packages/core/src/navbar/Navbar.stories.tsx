import React from 'react';
import { Meta } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavbarGroup } from './NavbarGroup';
import { Button } from '../button';
import { NavbarText } from './NavbarText';
import { BackgroundColor } from '../theming/BackgroundColor';
import { Helmet } from 'react-helmet';
import { TextInput } from '../forms/textinput/TextInput';
import { BreadCrumbs } from '../breadcrumbs/BreadCrumbs';
import { IconName, Intent } from '..';
import { ToolTip } from '../overlays/ToolTip';

export default {
  title: 'Core/Components/Navbar',
  component: Navbar,
} as Meta;

export const MinimalisticNavbar = () => (
  <div>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>Content</NavbarGroup>
    </Navbar>
  </div>
);

export const NavbarSingleChild = () => (
  <div>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </div>
);

export const NavbarMultipleChildren = () => (
  <div>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </div>
);

export const NavbarGrowingChildren = () => (
  <div>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup grow={true}>
        <Button>Button</Button>
        <Button>Button</Button>
      </NavbarGroup>
      <NavbarGroup>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </div>
);

export const CondensedNavbar = () => (
  <div>
    <Navbar condensed={true}>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup grow={true}>
        <Button>Button</Button>
        <Button>Button</Button>
      </NavbarGroup>
      <NavbarGroup>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </div>
);

export const NavbarsWithDifferentBackgrounds = () => (
  <div>
    {[
      BackgroundColor.Primary,
      BackgroundColor.Secondary,
      BackgroundColor.Tertiary,
      BackgroundColor.Menu,
      '#123123',
    ].map(background => (
      <Navbar key={background} background={background} css={{ marginBottom: '1em' }}>
        <NavbarText element="h1">Background {background}</NavbarText>
        <NavbarGroup grow={true}>
          <Button>Button</Button>
          <Button>Button</Button>
        </NavbarGroup>
        <NavbarGroup>
          <Button>Button</Button>
        </NavbarGroup>
      </Navbar>
    ))}
  </div>
);

export const ComplexExample = () => (
  <div>
    <Helmet>
      <style>{' .story-inner { padding: 0 !important; } '}</style>
    </Helmet>
    <Navbar>
      <NavbarText element="h1">My App</NavbarText>
      <NavbarGroup grow={true}>
        <Button icon={IconName.Class}>Bookmarks</Button>
        <Button icon={IconName.Dns}>Server Configuration</Button>
        <Button icon={IconName.ReportProblem}>Issues</Button>
      </NavbarGroup>
      <NavbarGroup>
        <TextInput
          round={true}
          small={true}
          css={{ width: '140px' }}
          rightElement={IconName.Search}
          placeholder="Seach..."
        />
        <ToolTip content={'Archive'}>
          <Button icon={IconName.Archive} />
        </ToolTip>
        <ToolTip content={'Settings'}>
          <Button icon={IconName.Settings} />
        </ToolTip>
        <ToolTip content={'Help'}>
          <Button icon={IconName.Help} />
        </ToolTip>
      </NavbarGroup>
    </Navbar>
    <Navbar background={BackgroundColor.Secondary} condensed={true}>
      <NavbarGroup grow={true}>
        <BreadCrumbs
          small={true}
          items={[
            { href: '#', title: 'Repositories' },
            { href: '#', title: 'Blackmaker' },
            { href: '#', title: 'src' },
            { href: '#', title: 'index.ts' },
          ]}
        />
      </NavbarGroup>
      <NavbarGroup>
        {/*<Button icon={IconName.Favorite} />
        <Button icon={IconName.Feedback} />
        <Button icon={IconName.DateRange} />
        <Button icon={IconName.Save}>Save</Button>*/}
        <Button>Abort</Button>
        <Button>Apply</Button>
        <Button outlined={true}>Save</Button>
      </NavbarGroup>
    </Navbar>
  </div>
);
