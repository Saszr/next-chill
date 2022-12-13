import Head from 'next/head';

import { Web3Layout } from 'lib/layouts';
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
Index.layout = Web3Layout;

export default Index;
