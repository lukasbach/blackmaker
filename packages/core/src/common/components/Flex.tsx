import * as React from 'react';
import { Box, BoxProps } from './Box';


export const Flex: React.FC<BoxProps> = props => {
  return (
    <Box display="flex" {...props}>
      { props.children }
    </Box>
  );
};
