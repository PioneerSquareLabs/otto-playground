_
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Fetch data from API and set the state
  }, []);

  return <Component {...pageProps} />;
};

export default CustomApp;

