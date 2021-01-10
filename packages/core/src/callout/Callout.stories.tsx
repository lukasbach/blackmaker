import React from 'react';
import { Meta } from '@storybook/react';
import { Callout, CalloutProps, CalloutStyle } from './Callout';
import { intents } from '../common/intents';
import { IconName } from '../../out';

export default {
  title: 'Core/Components/Callout',
  component: Callout,
} as Meta;

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const props: Partial<CalloutProps> = {
  headingLevel: 1,
  icon: IconName.AccessAlarm,
  onClose: () => alert("Close!"),
  title: "Title"
}

export const VariousCalloutOptions = () => (
  <div>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={1}
      {...props}
      onClose={undefined}
    >
      No close button
    </Callout>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={1}
      {...props}
      title={undefined}
    >
      No title
    </Callout>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={1}
      {...props}
      icon={undefined}
    >
      No icon
    </Callout>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={1}
      {...props}
      icon={undefined}
      title={undefined}
    >
      No icon and no title
    </Callout>
  </div>
);

export const MinimalCallouts = () => (
  <div>
    { intents.map(i => (
      <Callout
        key={i} intent={i}
        style={CalloutStyle.Minimal}
        {...props}
      >
        { lorem }
      </Callout>
    )) }
  </div>
);

export const HeavyCallouts = () => (
  <div>
    { intents.map(i => (
      <Callout
        key={i} intent={i}
        style={CalloutStyle.Heavy}
        {...props}
      >
        { lorem }
      </Callout>
    )) }
  </div>
);

export const OutlinedCallouts = () => (
  <div>
    { intents.map(i => (
      <Callout
        key={i} intent={i}
        style={CalloutStyle.Outlined}
        {...props}
      >
        { lorem }
      </Callout>
    )) }
  </div>
);

export const LeftBorderCallouts = () => (
  <div>
    { intents.map(i => (
      <Callout
        key={i} intent={i}
        style={CalloutStyle.LeftBorder}
        {...props}
      >
        { lorem }
      </Callout>
    )) }
  </div>
);

export const BackgroundColorCallouts = () => (
  <div>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={1}
      {...props}
    >
      { lorem }
    </Callout>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={2}
      {...props}
    >
      { lorem }
    </Callout>
    <Callout
      style={CalloutStyle.BackgroundColor}
      backgroundColorStyle={3}
      {...props}
    >
      { lorem }
    </Callout>
  </div>
);

export const CalloutSizes = () => (
  <div>
    { (['tiny', 'small', 'normal', 'large', 'x-large'] as const).map(s => (
      <Callout
        key={s} size={s}
        style={CalloutStyle.Minimal}
        {...props}
        title={`Callout of size ${s}`}
      >
        { lorem }
      </Callout>
    )) }
  </div>
);
