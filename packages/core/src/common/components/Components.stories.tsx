import React from 'react';
import { Meta } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';

export default {
  title: 'Core/Common/Utility Components',
  component: Box,
} as Meta;

export const BoxComponent = () => (
  <Box backgroundColor="red" width="400px" height="200px" border="2px solid blue">
    Content
  </Box>
);

export const CustomElementType = () => (
  <Box element="a" color="blue" elementProps={{ href: 'https://google.com', target: '_blank' } as any}>
    Link
  </Box>
);

export const FlexComponent = () => (
  <Flex>
    <Box backgroundColor="red" width={100} height={50}>
      Content
    </Box>
    <Box backgroundColor="blue" flexGrow={1}>
      Content
    </Box>
    <Box backgroundColor="green" width={100} height={50}>
      Content
    </Box>
  </Flex>
);
