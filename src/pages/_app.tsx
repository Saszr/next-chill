import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Fragment } from 'react';

import { Chakra } from 'lib/containers/Chakra';
import { rootStore, persistor } from 'lib/store';

const MyApp = ({ Component, pageProps }: NextAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <Chakra>
      <Provider store={rootStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </PersistGate>
      </Provider>
    </Chakra>
  );
};

export default MyApp;
