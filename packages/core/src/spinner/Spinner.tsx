import * as React from 'react';
import { Intent, useTheme } from '..';
import cxs from 'cxs';
import { useUniqueId } from '../common/useUniqueId';

/**
 * https://samherbert.net/svg-loaders/
 */

export interface SpinnerProps {
  intent?: Intent;
  color?: string;
  size?: number;
}

export const Spinner: React.FC<SpinnerProps> = props => {
  const theme = useTheme();
  const gradientId = useUniqueId('blackmaker_spinner_gradient');

  const color = props.color ?? theme.getColor(props.intent, theme.definition.textHightlightColor);
  const size = props.size ?? 16;

  let viewBox = '0 0 38 38';
  let strokeWidth = 2;
  let radius = 1;

  if (size < 32) {
    viewBox = '-2 -2 42 42';
    strokeWidth = 6;
    radius = 3;
  }

  return (
    <div
      className={ cxs({
        display: 'inline-block'
      }) }
    >
      <svg width={size} height={size} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id={gradientId}>
            <stop stopColor={color} stopOpacity="0" offset="0%"/>
            <stop stopColor={color} stopOpacity=".631" offset="63.146%"/>
            <stop stopColor={color} offset="100%"/>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke={`url(#${gradientId})`} strokeWidth={strokeWidth}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite" />
            </path>
            <circle fill={color} cx="36" cy="18" r={radius}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="0.9s"
                repeatCount="indefinite" />
            </circle>
          </g>
        </g>
      </svg>

    </div>
  );
};
