import React, { Component } from 'react';
import { Meta } from '@storybook/react';
import { HorizontalRule } from './HorizontalRule';
import { Paragraph } from './Paragraph';
import { CardWithBorderedHeader } from '../card/Card.stories';

export default {
  title: 'Core/Typography/HorizontalRule',
  component: HorizontalRule,
} as Meta;

const loremIpsum =
  'Ein mandalorianischer Kopfgeldjäger (Pedro Pascal), der sich frappierend von Boba Fett unterscheidet, geht seinem zwielichtigen Job nach, wobei gerade die Moral häufig in Konflikt mit seinen manchmal eher zweifelhaften Aufträgen gerät. Die Handlung setzt fünf Jahre nach dem Fall des Imperiums ein, der sich in „Star Wars: Episode VI – Die Rückkehr der Jedi-Ritter“ ereignete. Zu diesem Zeitpunkt sprießen die ersten Triebe der Ersten Ordnung, welche sich sukzessive zu einer dominanten Macht im Universum erheben wird. Im Hintergrund werden entsprechen fleißig Pläne auf politischer Ebene gesponnen. Die Wege des Mandalorianers und von dem ehemaligen imperiale Sektorgouverneur Moff Gideo (Giancarlo Esposito) kreuzen sich immer wieder – und es entsteht eine bitterböse Feindschaft zwischen den beiden.';

export const Example = () => (
  <div>
    <Paragraph>{loremIpsum}</Paragraph>
    <HorizontalRule />
    <Paragraph>{loremIpsum}</Paragraph>
  </div>
);

export const WideExample = () => (
  <div>
    <Paragraph>{loremIpsum}</Paragraph>
    <HorizontalRule wide={true} />
    <Paragraph>{loremIpsum}</Paragraph>
  </div>
);

export const CardExample = CardWithBorderedHeader;
