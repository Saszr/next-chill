import Head from 'next/head';

import { Web3Layout } from 'lib/layouts';
import Web3 from 'lib/pages/Web3';

const Index = () => {
  return (
    <>
      <Head>
        <title>Chill - Web3</title>
      </Head>
      <Web3 />
    </>
  );
};
Index.layout = Web3Layout;

export default Index;
