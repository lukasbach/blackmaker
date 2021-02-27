import * as React from 'react';
import { AnyElement } from '@blackmaker/core/out/common/AnyElement';
import { BreadCrumbProps } from '@blackmaker/core/out/breadcrumbs/BreadCrumb';
import { MenuItemProps } from '@blackmaker/core/out/menu/MenuItem';
import { TagProps } from '@blackmaker/core/out/tags/Tag';
import { Flex } from '@blackmaker/core/out/common/components/Flex';
import { Box } from '@blackmaker/core/out/common/components/Box';
import { ButtonWithTooltip, ButtonWithTooltipProps } from '@blackmaker/core/out/button/ButtonWithTooltip';
import { BreadCrumbs } from '@blackmaker/core/out/breadcrumbs/BreadCrumbs';
import { MaybeIcon } from '@blackmaker/core/out/icons/MaybeIcon';
import { useTheme } from '@blackmaker/core/out/theming/ThemeContext';

export interface PageHeaderProps {
  leftUpperActions?: JSX.Element | ButtonWithTooltipProps[];
  rightUpperActions?: JSX.Element | ButtonWithTooltipProps[];
  moreActions?: MenuItemProps[];
  breadcrumbs?: BreadCrumbProps[];
  icon?: MaybeIcon;
  title?: AnyElement;
  description?: AnyElement;
  tags?: TagProps[];
}

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const theme = useTheme();

  return (
    <>
      <Flex>
        <Flex flexGrow={1} alignItems={'center'}>
          {Array.isArray(props.leftUpperActions) ? (
            <Box marginRight=".5em">
              {props.leftUpperActions.map((action, index) => (
                <ButtonWithTooltip key={index} minimal={true} {...action} />
              ))}
            </Box>
          ) : props.leftUpperActions}
          {props.breadcrumbs?.length && (
            <BreadCrumbs items={props.breadcrumbs} />
          )}
        </Flex>
        {theme.isDark ? "dunkel" : "hell"}
      </Flex>
    </>
  );
};
