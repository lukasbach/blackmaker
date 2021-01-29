import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Intent, useTheme } from '..';
import cxs from 'cxs';
import { TabProps } from './Tab';
import { TabsContext } from './TabsContext';

export const UnderlinedTab: React.FC<TabProps> = props => {
  const { onChangeTab, currentTab, onRegisterTab } = useContext(TabsContext);
  useEffect(() => onRegisterTab(props.id), [props.id, onRegisterTab]);
  const theme = useTheme();
  const intent = props.intent ?? Intent.Primary;

  return (
    <button
      className={cxs({
        backgroundColor: 'transparent',
        fontSize: '.9em',
        fontWeight: 'bold',
        border: 'none',
        borderBottom: '4px solid transparent',
        cursor: props.id !== currentTab && 'pointer',
        color: theme.definition.textMutedColor,
        outline: 'none',
        padding: '.5em .7em .3em .7em',
        marginRight: '.2em',
        borderTopRightRadius: theme.definition.borderRadiusRegular,
        borderTopLeftRadius: theme.definition.borderRadiusRegular,
        transition: '.2s all ease',

        ...(props.id === currentTab
          ? {
              borderColor: theme.getColor(intent),
              color: theme.getBrandTextColor(intent),
            }
          : {
              ':hover': {
                color: theme.definition.textHightlightColor,
              },
              ':active': {
                backgroundColor: theme.colorWithAlpha(theme.getMinimalBrandBaseColor(intent), 0.2),
                transition: '.05s all ease',
              },
            }),
      })}
      onClick={() => (props.id !== currentTab ? onChangeTab?.(props.id) : {})}
    >
      {props.children}
      {props.title}
    </button>
  );
};
