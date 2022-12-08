import Head from 'next/head';

import { DefaultLayout } from 'lib/layouts';
import Home from 'lib/pages/Home';

const Index = () => {
  return (
    <>
      <Head>
        <title>Chill</title>
      </Head>
      <Home />
    </>
  );
};
Index.layout = DefaultLayout;

export default Index;
