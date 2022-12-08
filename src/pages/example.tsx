import Head from 'next/head';

import { DefaultLayout } from 'lib/layouts';
import Example from 'lib/pages/Example';

const Index = () => {
  return (
    <>
      <Head>
        <title>Chill - Example</title>
      </Head>
      <Example />
    </>
  );
};
Index.layout = DefaultLayout;

export default Index;
