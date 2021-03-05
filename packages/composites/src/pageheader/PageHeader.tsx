import * as React from 'react';
import { AnyElement } from '@blackmaker/core/out/common/AnyElement';
import { BreadCrumbProps } from '@blackmaker/core/out/breadcrumbs/BreadCrumb';
import { TagProps } from '@blackmaker/core/out/tags/Tag';
import { Flex } from '@blackmaker/core/out/common/components/Flex';
import { Box } from '@blackmaker/core/out/common/components/Box';
import { ButtonWithTooltip, ButtonWithTooltipProps } from '@blackmaker/core/out/button/ButtonWithTooltip';
import { BreadCrumbs } from '@blackmaker/core/out/breadcrumbs/BreadCrumbs';
import { MaybeIcon } from '@blackmaker/core/out/icons/MaybeIcon';
import { useTheme } from '@blackmaker/core/out/theming/ThemeContext';
import {
  Heading,
  HtmlElementProps,
  Paragraph,
  RenderMaybeIcon,
  TabProps,
  Tabs,
  TabsProps,
  TabsStyle,
} from '@blackmaker/core';

export interface PageHeaderProps extends Pick<TabsProps, 'currentTab' | 'onChangeTab'>, HtmlElementProps<HTMLElement> {
  actionsLeft?: JSX.Element | ButtonWithTooltipProps[];
  actionsRight?: JSX.Element | ButtonWithTooltipProps[];
  actionsRight2?: JSX.Element | ButtonWithTooltipProps[];
  breadcrumbs?: JSX.Element | BreadCrumbProps[];
  tabs?: JSX.Element | TabProps[];
  icon?: MaybeIcon;
  title?: AnyElement;
  description?: AnyElement;
  tags?: TagProps[];
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <Box padding=".5em" paddingBottom="0" {...props.css} elementProps={props.elementProps}>
      <Flex marginBottom=".5em">
        <Flex flexGrow={1} alignItems={'center'}>
          {Array.isArray(props.actionsLeft) ? (
            <Box marginRight=".5em">
              {props.actionsLeft.map((action, index) => (
                <ButtonWithTooltip key={index} minimal={true} {...action} />
              ))}
            </Box>
          ) : (
            props.actionsLeft
          )}
          {props.breadcrumbs && Array.isArray(props.breadcrumbs) && props.breadcrumbs?.length ? (
            <BreadCrumbs items={props.breadcrumbs} small={true} />
          ) : (
            props.breadcrumbs
          )}
        </Flex>
        <div>
          {Array.isArray(props.actionsRight)
            ? props.actionsRight.map((action, index) => <ButtonWithTooltip key={index} {...action} />)
            : props.actionsRight}
        </div>
      </Flex>
      <Flex alignItems="center" marginBottom="1.5em">
        {props.icon && (
          <Box margin="0 1em">
            <RenderMaybeIcon icon={props.icon} iconProps={{ size: '4em' }} />
          </Box>
        )}
        <Box flexGrow={1}>
          {props.title && (
            <Heading level={1} css={{ margin: '0' }}>
              {props.title}
            </Heading>
          )}
          {props.title && <Paragraph muted={true}>{props.description}</Paragraph>}
        </Box>
        {props.actionsRight2 && (
          <Box alignSelf="flex-start">
            {Array.isArray(props.actionsRight2)
              ? props.actionsRight2.map((action, index) => <ButtonWithTooltip key={index} {...action} />)
              : props.actionsRight2}
          </Box>
        )}
      </Flex>
      {props.tabs && (
        <div>
          {Array.isArray(props.tabs) ? (
            <Tabs
              tabs={props.tabs}
              currentTab={props.currentTab}
              onChangeTab={props.onChangeTab}
              tabStyle={TabsStyle.Underlined}
            />
          ) : (
            props.tabs
          )}
        </div>
      )}
    </Box>
  );
};
