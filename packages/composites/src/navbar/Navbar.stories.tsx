import React from 'react';
import { Meta } from '@storybook/react';
import { Navbar } from './Navbar';
import { NavbarGroup } from './NavbarGroup';
import { NavbarText } from './NavbarText';
import { BackgroundColor } from '@blackmaker/core/out/theming/BackgroundColor';
import { Helmet } from 'react-helmet';
import { TextInput } from '@blackmaker/core/out/forms/textinput/TextInput';
import { BreadCrumbs } from '@blackmaker/core/out/breadcrumbs/BreadCrumbs';
import { ToolTip } from '@blackmaker/core/out/overlays/ToolTip';
import { documentStory } from '../../../../.storybook/utils/documentStory';
import { Button } from '@blackmaker/core/out/button/Button';
import { IconName } from '@blackmaker/core/out/icons/IconName';

export default {
  title: 'Composites/Navbar',
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
  <>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>Content</NavbarGroup>
    </Navbar>
  </>
);
// documentStory(MinimalisticNavbar, `
// Use a \`Navbar\` element to render a navbar. It renders as a \`nav\` HTML element.
// Use \`<NavbarText element="h1">\` children to render a title, and \`NavbarGroup\` elements
// to render button groups. To both you can provide a \`grow\` attribute to make it grow.
// `);

export const NavbarSingleChild = () => (
  <>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </>
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
  <>
    <Navbar>
      <NavbarText element="h1">Page Title</NavbarText>
      <NavbarGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </NavbarGroup>
    </Navbar>
  </>
);
documentStory(
  NavbarMultipleChildren,
  `
Children of a \`NavbarGroup\` are automatically each wrapped in a \`li\` element.
The \`NavbarGroup\` element turns into a \`ul\` element.
`
);

export const NavbarGrowingChildren = () => (
  <>
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
  </>
);

export const CondensedNavbar = () => (
  <>
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
  </>
);

export const NavbarsWithDifferentBackgrounds = () => (
  <>
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
  </>
);

export const ComplexExample = () => (
  <>
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
  </>
);
