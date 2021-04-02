import * as React from 'react';
import {
  AnyElement,
  Button,
  ButtonProps,
  HtmlElementProps,
  IconName,
  Intent,
  Paragraph,
  RenderMaybeIcon,
  RoundButton,
  useTheme,
} from '..';
import cxs from 'cxs';

export interface BarProps extends HtmlElementProps {
  intent?: Intent;
  icon?: IconName;
  content?: AnyElement;
  actions?: ButtonProps[] | JSX.Element;
  canClose?: boolean;
  onClose?: () => void;
  fixedToTop?: boolean;
  fixedToBottom?: boolean;
}

export const Bar: React.FC<BarProps> = props => {
  const theme = useTheme();
  const color = theme.getTextColorOnBrandColors(props.intent);

  return (
    <div
      className={cxs({
        display: 'flex',
        alignItems: 'center',
        position: props.fixedToBottom || props.fixedToTop ? 'fixed' : undefined,
        top: props.fixedToTop ? '0' : undefined,
        bottom: props.fixedToBottom ? '0' : undefined,
        left: props.fixedToBottom || props.fixedToTop ? '0' : undefined,
        right: props.fixedToBottom || props.fixedToTop ? '0' : undefined,
        backgroundColor: theme.getColor(props.intent),
        height: '3.5em',
        padding: '0 2em',
        color,
      })}
    >
      {props.icon && (
        <div
          className={cxs({
            marginRight: '1em',
          })}
        >
          <RenderMaybeIcon icon={props.icon} />
        </div>
      )}

      <div
        className={cxs({
          flexGrow: 1,
          overflow: 'auto',
        })}
      >
        <Paragraph css={{ color }} truncate={true} content={props.content || props.children} singleBlock={true} />
      </div>

      {props.actions &&
        (Array.isArray(props.actions) ? (
          <div>
            {props.actions.map((action, key) => (
              <Button key={key} minimal={true} css={{ color }} {...action} />
            ))}
          </div>
        ) : (
          <div>{props.actions}</div>
        ))}

      {props.canClose && (
        <div
          className={cxs({
            marginLeft: '1em',
          })}
        >
          <RoundButton css={{ color }} icon={IconName.Close} onClick={props.onClose} />
        </div>
      )}
    </div>
  );
};
