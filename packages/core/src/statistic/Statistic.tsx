import * as React from 'react';
import { HtmlElementProps, MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { AnyElement } from '../common/AnyElement';
import { CopyToClipboardButton, CopyToClipboardButtonProps } from '../clipboard/CopyToClipboardButton';

export interface StatisticProps extends HtmlElementProps<HTMLDListElement> {
  title: AnyElement;
  value: string | number;
  metric?: string;
  inline?: boolean;
  icon?: MaybeIcon;
  canCopy?: boolean;
  copyMetric?: boolean;
  bigValue?: boolean;
  copyToClipboardButtonProps?: Partial<CopyToClipboardButtonProps>;
}

export const Statistic: React.FC<StatisticProps> = props => {
  const theme = useTheme();

  let valueElement = (
    <>
      {props.value}
      {props.metric && (
        <span
          className={cxs({
            color: theme.definition.textMutedColor,
          })}
        >
          {props.metric}
        </span>
      )}
    </>
  );

  if (props.canCopy) {
    valueElement = (
      <CopyToClipboardButton
        textToCopy={props.copyMetric && props.metric ? '' + props.value + props.metric : '' + props.value}
        innerToolTipProps={{
          // TODO maybe move to tooltip directly
          css: { fontSize: '1rem', ...props.copyToClipboardButtonProps?.innerToolTipProps?.css },
          contentCss: { fontSize: '1rem', ...props.copyToClipboardButtonProps?.innerToolTipProps?.contentCss },
          ...props.copyToClipboardButtonProps?.innerToolTipProps,
        }}
        {...props.copyToClipboardButtonProps}
      >
        {valueElement}
      </CopyToClipboardButton>
    );
  }

  let content = (
    <dl
      className={cxs({
        display: 'flex',
        flexDirection: props.inline ? 'row' : 'column',
        alignItems: props.inline ? 'center' : undefined,
        flexGrow: props.icon ? 1 : undefined,
        marginBlock: '0',
        marginInline: '0',
        ...props.css,
      })}
      {...props.elementProps}
    >
      <dt
        className={cxs({
          flexGrow: 1,
          fontSize: '1em',
          fontWeight: 'bold',
          fontStyle: 'none',
          textTransform: 'capitalize',
          marginBottom: '-.1em',
        })}
      >
        {props.title}
      </dt>
      <dd
        className={cxs({
          fontSize: props.bigValue ?? true ? '1.8em' : undefined,
          fontWeight: 'lighter',
          marginBlock: '0',
          marginInline: '0',
        })}
      >
        {valueElement}
      </dd>
    </dl>
  );

  if (props.icon) {
    content = (
      <div
        className={cxs({
          display: 'flex',
          alignItems: props.inline ? 'center' : undefined,
        })}
      >
        <RenderMaybeIcon
          icon={props.icon}
          iconProps={{ marginRight: props.inline ? '.3em' : '.5em', size: props.inline ? '1.5em' : '2em' }}
        />
        {content}
      </div>
    );
  }

  return content;
};
