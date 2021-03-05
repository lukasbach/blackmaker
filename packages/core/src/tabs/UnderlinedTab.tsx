import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Intent, MaybeFocusRing, useTheme } from '..';
import cxs from 'cxs';
import { TabProps } from './Tab';
import { TabsContext } from './TabsContext';

export const UnderlinedTab = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<TabProps>>((props, ref) => {
  const { onChangeTab, currentTab, onRegisterTab } = useContext(TabsContext);
  useEffect(() => onRegisterTab(props.id), [props.id, onRegisterTab]);
  const theme = useTheme();
  const intent = props.intent ?? Intent.Primary;

  return (
    <MaybeFocusRing>
      <button
        ref={ref}
        className={cxs({
          backgroundColor: 'transparent',
          fontSize: '.9em',
          fontWeight: 'bold',
          border: 'none',
          // borderBottom: '4px solid transparent',
          cursor: props.id !== currentTab ? 'pointer' : undefined,
          color: theme.definition.textMutedColor,
          outline: 'none',
          padding: '1em .7em 0 .7em',
          marginRight: '.2em',
          borderTopRightRadius: theme.definition.borderRadiusRegular,
          borderTopLeftRadius: theme.definition.borderRadiusRegular,
          transition: '.2s all ease',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          '> :first-child': {
            flexGrow: 1,
            paddingBottom: '.7em',
          },

          ...(props.id === currentTab
            ? {
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
        <div>
          {props.children}
          {props.title ?? props.id}
        </div>
        <div
          className={cxs({
            height: '4px',
            backgroundColor: props.id === currentTab ? theme.getColor(intent) : undefined,
            width: '80%',
            borderTopRightRadius: theme.definition.borderRadiusSmall,
            borderTopLeftRadius: theme.definition.borderRadiusSmall,
          })}
        />
      </button>
    </MaybeFocusRing>
  );
});
