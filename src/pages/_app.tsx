import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Chakra } from 'lib/containers/Chakra';
import Layout from 'lib/layout';
import { rootStore, persistor } from 'lib/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Provider store={rootStore}>
        <PersistGate persistor={persistor}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </Chakra>
  );
};

export default MyApp;
