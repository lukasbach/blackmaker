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
import { documentStory } from '../../../../.storybook/utils/documentStory';

export default {
  title: 'Core/Components/Navbar',
  component: Navbar,
  subcomponents: { NavbarGroup, NavbarText },
  parameters: {
    docs: {
      description: {
        component: `
Use a \`Navbar\` element to render a navbar. It renders as a \`nav\` HTML element.
Use \`<NavbarText element="h1">\` children to render a title, and \`NavbarGroup\` elements
to render button groups. To both you can provide a \`grow\` attribute to make it grow.
`,
      },
    },
  },
} as Meta;

export const MinimalisticNavbar = () => (
  <div>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>Content</NavbarGroup>
    </Navbar>
  </div>
);
// documentStory(MinimalisticNavbar, `
// Use a \`Navbar\` element to render a navbar. It renders as a \`nav\` HTML element.
// Use \`<NavbarText element="h1">\` children to render a title, and \`NavbarGroup\` elements
// to render button groups. To both you can provide a \`grow\` attribute to make it grow.
// `);

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
documentStory(
  NavbarSingleChild,
  `
All buttons within a \`NavbarGroup\`'s hierarchy are automtically turned into \`minimal\` Buttons.
Set the \`minimal\`-attribute on a button explicitly to \`false\` to render a regular button
within a navbar.
`
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
documentStory(
  NavbarMultipleChildren,
  `
Children of a \`NavbarGroup\` are automatically each wrapped in a \`li\` element.
The \`NavbarGroup\` element turns into a \`ul\` element.
`
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
