import * as React from 'react';
import { BackgroundColor, Box, CardArea, CardContainer, Flex, Menu, MenuHeader, useTheme } from '@blackmaker/core';
import { ComplexExample as Navbar } from '../../composites/src/navbar/Navbar.stories';
import { MenuWithoutBackground } from '../../core/src/menu/Menu.stories';

export const DemoAppWithNavbar: React.FC<{}> = props => {
  const theme = useTheme();

  return (
    <Box height="100%" width="100%" backgroundColor={theme.getBackgroundColor(BackgroundColor.Primary)}>
      <Navbar />
      <Box margin="2em 10em">
        <CardContainer fill={true}>
          <CardArea>
            <Flex>
              <Box>
                <MenuWithoutBackground />
              </Box>
              <Box height="600px">Content</Box>
            </Flex>
          </CardArea>
        </CardContainer>
      </Box>
    </Box>
  );
};
