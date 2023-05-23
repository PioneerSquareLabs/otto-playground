import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const header = (
    <Flex as="header" bg="blue.500" p={4} justifyContent="center">
      {title && <Heading as="h1" size="lg" color="white">{title}</Heading>}
    </Flex>
  );

  const mainContent = (
    <Box as="main" p={4}>
      {children}
    </Box>
  );

  const footer = (
    <Flex as="footer" bg="blue.500" p={4} justifyContent="center">
      <Heading as="h6" size="sm" color="white">Otto PM © {new Date().getFullYear()}</Heading>
    </Flex>
  );

  return (
    <Flex flexDirection="column" minHeight="100vh">
      {header}
      <Box flex="1">{mainContent}</Box>
      {footer}
    </Flex>
  );
};

export default Layout;