import React from 'react';
import { Meta } from '@storybook/react';
import { Heading } from '../typography/Heading';
import { CardContainer } from '../card/CardContainer';
import { CardArea } from '../card/CardArea';
import { BackgroundColor } from './BackgroundColor';
import { intents } from '../common/intents';
import { useTheme } from '../../out';
import cxs from 'cxs';

export default {
  title: 'Core/Theming/Color Accessibility',
} as Meta;

const backgrounds = [
  [ BackgroundColor.Primary, 'Primary' ],
  [ BackgroundColor.Secondary, 'Secondary' ],
  [ BackgroundColor.Tertiary, 'Tertiary' ],
  [ BackgroundColor.Menu, 'Menu' ],
] as const;

export const TextColors = () => {
  const theme = useTheme();
  return (
    <div>
      <Heading>Text Colors</Heading>
      { backgrounds.map(([color, colorName]) => (
        <CardContainer background={color} key={color} css={{ marginBottom: '1em' }}>
          <CardArea header={true} headingLevel={2}>
            On { colorName } Background
          </CardArea>
          <CardArea>
            <span>
              Lorem Ipsum
            </span>
            {intents.map(i => (
              <span className={cxs({ color: theme.getBrandTextColor(i) })} key={i}>
                Lorem Ipsum
              </span>
            ))}
          </CardArea>
        </CardContainer>
      )) }
    </div>
  );
};

export const ColorsOnIntentBackgrounds = () => {
  const theme = useTheme();
  return (
    <div>
      <Heading>Colors on Intent Backgrounds</Heading>
      <CardContainer>
        { intents.map(i => (
          <CardArea intent={i} key={i}>
            Lorem Ipsum
          </CardArea>
        )) }
      </CardContainer>
    </div>
  );
};
