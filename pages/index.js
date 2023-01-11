import Head from 'next/head';
import Header from 'components/layout/Header';

export default function index() {
  return (
    <>
      <Head>
        <title>AWESOME FOOD STORE</title>
        <meta name="description" content="AWESOME FOOD STORE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  )
}
