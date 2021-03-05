import * as React from 'react';
import { useState } from 'react';
import {
  BackgroundColor,
  Box,
  CardArea,
  CardContainer,
  Flex,
  HorizontalRule,
  Icon,
  IconName,
  Intent,
  Paragraph,
  Statistic,
  Tag,
  TextInput,
  TooltipPlacement,
  useTheme,
} from '@blackmaker/core';
import { PageHeader, SideNavigation } from '@blackmaker/composites';

export const DemoAppWithSideBar: React.FC = props => {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme();
  return (
    <Flex height="100%" backgroundColor={theme.getBackgroundColor(BackgroundColor.Secondary)}>
      <SideNavigation
        items={[
          <Flex height="5em" alignItems="center" justifyContent="center">
            <Icon name={IconName.Public} size="3em" />
          </Flex>,
          <TextInput
            placeholder="Search"
            leftElement={IconName.Search}
            rightElement={<Tag content="&nbsp;/&nbsp;" />}
            fill={true}
            small={true}
          />,
          'Wiki',
          { text: 'Home', icon: IconName.Home },
          { text: 'Characters', icon: IconName.Face },
          { text: 'Vehicles', icon: IconName.LocalShipping },
          { text: 'Starships', icon: IconName.Flight, selected: true },
          'My stuff',
          { text: 'Bookmarks', icon: IconName.Bookmark },
          { text: 'Files', icon: IconName.AttachFile },
        ]}
        bottomItems={[
          { text: 'Settings', icon: IconName.Settings },
          { text: 'Account', icon: IconName.AccountCircle },
        ]}
        isCollapsed={collapsed}
        onChangeCollapsed={setCollapsed}
        width={200}
      />
      <Box flexGrow={1} overflowY="auto">
        <PageHeader
          css={{
            backgroundColor: theme.getBackgroundColor(BackgroundColor.Primary),
          }}
          icon={IconName.Portrait}
          title="Millenium Falcon"
          description="Spaceship that can take the Kessel run in very few parsecs."
          breadcrumbs={[
            { href: '#', title: 'Wiki' },
            { href: '#', title: 'Starships' },
            { href: '#', title: 'Rebel Alliance' },
            { title: 'Millenium Falcon', current: true },
          ]}
          actionsLeft={[
            { icon: IconName.ArrowBack, tooltip: 'Go back' },
            { icon: IconName.ArrowUpward, tooltip: 'Go up' },
          ]}
          actionsRight={[{ text: 'Cancel' }, { icon: IconName.Save, text: 'Save', intent: Intent.Primary }]}
          actionsRight2={[{ icon: IconName.Help, tooltip: 'Open documentation', minimal: true }]}
          tabs={[
            { id: 'tab1', title: 'Overview' },
            { id: 'tab2', title: 'Data Sheet' },
            { id: 'tab3', title: 'Images' },
            { id: 'tab4', title: 'Drivers' },
          ]}
          currentTab="tab1"
          onChangeTab={() => {}}
        />
        <Flex borderTop={`1px solid ${theme.getColor()}`} flexDirection="column" alignItems="center" paddingTop="2em">
          <CardContainer css={{ width: '800px' }} background={BackgroundColor.Primary}>
            <CardArea>
              <Paragraph>"You've never heard of the Millennium Falcon?"</Paragraph>
              <Paragraph>"Should I have?"</Paragraph>
              <Paragraph>
                "It's the ship that made the Kessel Run in less than twelve parsecs. I've outrun Imperial starships. Not
                the local bulk cruisers, mind you, I'm talking about the big Corellian ships now. She's fast enough for
                you, old man."
              </Paragraph>
              <Paragraph muted={true}>―Han Solo and Obi-Wan Kenobi</Paragraph>
            </CardArea>
          </CardContainer>

          <Flex width="800px" marginTop="1em" alignItems={'flex-start'}>
            <CardContainer css={{ width: '200px', marginRight: '20px' }} background={BackgroundColor.Primary}>
              <CardArea header={true} highlighted={true}>
                Commonly asked questions
              </CardArea>
              <CardArea interactive={true} onClick={() => {}}>
                How much heat can the Millenium Falcon withstand?
              </CardArea>
              <CardArea interactive={true} onClick={() => {}}>
                How fast can the Millenium Falcon get?
              </CardArea>
              <CardArea interactive={true} onClick={() => {}}>
                How much heat can the Millenium Falcon withstand?
              </CardArea>
            </CardContainer>
            <CardContainer background={BackgroundColor.Primary} css={{ flexGrow: 1 }}>
              <CardArea header={true} borderBottom={true}>
                Summary
              </CardArea>
              <CardArea>
                <Statistic
                  title="Name"
                  value="John Doe"
                  icon={IconName.Face}
                  inline={true}
                  canCopy={true}
                  copyToClipboardButtonProps={{
                    toolTipProps: {
                      placement: TooltipPlacement.Left,
                    },
                  }}
                  bigValue={false}
                />
                <HorizontalRule />
                <Statistic
                  title="User ID"
                  value="23489234"
                  icon={IconName.Fingerprint}
                  inline={true}
                  canCopy={true}
                  copyToClipboardButtonProps={{
                    toolTipProps: {
                      placement: TooltipPlacement.Left,
                    },
                  }}
                  bigValue={false}
                />
                <HorizontalRule />
                <Statistic
                  title="Age"
                  value={42}
                  icon={IconName.Portrait}
                  inline={true}
                  canCopy={true}
                  copyToClipboardButtonProps={{
                    toolTipProps: {
                      placement: TooltipPlacement.Left,
                    },
                  }}
                  bigValue={false}
                />
                <HorizontalRule />
                <Statistic
                  title="Last seen"
                  value="4 hours ago"
                  icon={IconName.AccessTime}
                  inline={true}
                  canCopy={true}
                  copyToClipboardButtonProps={{
                    toolTipProps: {
                      placement: TooltipPlacement.Left,
                    },
                  }}
                  bigValue={false}
                />
                <HorizontalRule />
                <Statistic
                  title="Balance"
                  value={1337.42}
                  metric=" USD"
                  icon={IconName.Money}
                  inline={true}
                  canCopy={true}
                  copyToClipboardButtonProps={{
                    toolTipProps: {
                      placement: TooltipPlacement.Left,
                    },
                  }}
                  bigValue={false}
                />
              </CardArea>
            </CardContainer>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
