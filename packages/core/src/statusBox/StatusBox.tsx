import * as React from 'react';
import { MaybeIcon, RenderMaybeIcon, useTheme } from '..';
import cxs from 'cxs';
import { Spinner } from '../spinner/Spinner';
import { Heading } from '../typography/Heading';
import { Paragraph } from '../typography/Paragraph';

export interface StatusBoxProps {
  loading?: boolean;
  icon?: MaybeIcon;
  title?: string | JSX.Element;
  paragraph?: string | JSX.Element;
  actions?: string | JSX.Element;
}

export const StatusBox: React.FC<StatusBoxProps> = props => {
  const theme = useTheme();

  return (
    <div
      className={ cxs({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }) }
    >
      { (!!props.icon || props.loading) ? (
        <div>
          { !props.loading ? (
            <RenderMaybeIcon
              icon={props.icon}
              iconProps={{
                size: '6em',
                color: theme.definition.textMutedColor
              }}
            />
          ) : (
            <Spinner
              size={64}
            />
          )}
        </div>
      ) : undefined }
      { props.title && (
        <Heading css={{ marginTop: '.4em', maxWidth: '280px' }}>
          { props.title }
        </Heading>
      ) }
      { props.paragraph && (
        <Paragraph
          content={props.paragraph}
          small={true}
          css={{
            maxWidth: '280px',
            textAlign: 'center',
            marginTop: '.8em'
          }}
        />
      ) }
      { props.actions && (
        <div className={cxs({
          marginTop: '2em'
        })}>
          { props.actions }
        </div>
      ) }
    </div>
  );
};
