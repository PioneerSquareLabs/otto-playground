_
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Project Management App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={4} bg="gray.100">
        {children}
      </Box>
    </>
  );
};

export default Layout;