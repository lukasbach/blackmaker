import React, { Component } from 'react';
import { Meta } from '@storybook/react';
import { HorizontalRule } from './HorizontalRule';
import { Paragraph } from './Paragraph';
import { CardWithBorderedHeader } from '../card/Card.stories';
import { VerticalRule } from './VerticalRule';
import { Button, ButtonGroup } from '..';

export default {
  title: 'Core/Typography/Rule',
  component: HorizontalRule,
  subcomponents: {VerticalRule}
} as Meta;

const loremIpsum =
  'Ein mandalorianischer Kopfgeldjäger (Pedro Pascal), der sich frappierend von Boba Fett unterscheidet, geht seinem zwielichtigen Job nach, wobei gerade die Moral häufig in Konflikt mit seinen manchmal eher zweifelhaften Aufträgen gerät. Die Handlung setzt fünf Jahre nach dem Fall des Imperiums ein, der sich in „Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter“ ereignete. Zu diesem Zeitpunkt sprießen die ersten Triebe der Ersten Ordnung, welche sich sukzessive zu einer dominanten Macht im Universum erheben wird. Im Hintergrund werden entsprechen fleißig Pläne auf politischer Ebene gesponnen. Die Wege des Mandalorianers und von dem ehemaligen imperiale Sektorgouverneur Moff Gideo (Giancarlo Esposito) kreuzen sich immer wieder – und es entsteht eine bitterböse Feindschaft zwischen den beiden.';

export const Horizontal = () => (
  <div>
    <Paragraph>{loremIpsum}</Paragraph>
    <HorizontalRule />
    <Paragraph>{loremIpsum}</Paragraph>
  </div>
);

export const HorizontalWide = () => (
  <div>
    <Paragraph>{loremIpsum}</Paragraph>
    <HorizontalRule wide={true} />
    <Paragraph>{loremIpsum}</Paragraph>
  </div>
);

export const CardExample = CardWithBorderedHeader;

export const Vertical = () => (
  <div style={{ display: 'flex' }}>
    <Paragraph css={{ margin: 0 }}>Hello world!</Paragraph>
    <VerticalRule />
    <Paragraph css={{ margin: 0 }}>Hello world!</Paragraph>
  </div>
);

export const VerticalHigh = () => (
  <div style={{ display: 'flex' }}>
    <Paragraph css={{ margin: 0 }}>Hello world!</Paragraph>
    <VerticalRule high={true} />
    <Paragraph css={{ margin: 0 }}>Hello world!</Paragraph>
  </div>
);

export const ButtonsExample = () => (
  <div style={{ display: 'flex' }}>
    <Button minimal={true}>Home</Button>
    <VerticalRule horizontalSpace=".3em" />
    <div>
      <ButtonGroup>
        <Button minimal={true}>Back</Button>
        <Button minimal={true}>Next</Button>
      </ButtonGroup>
    </div>
  </div>
);
