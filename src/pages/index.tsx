import Head from 'next/head';

import Home from 'lib/pages/Home';
import { Web3Layout } from 'lib/layouts';

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
Index.layout = Web3Layout;

export default Index;
