import Head from 'next/head';
import app from 'data/app.json';

const HeadInfo = (props) => {
  return (
    <Head>
      <title>{props.title || app.title}</title>
      <meta name="description" content={props.desc || app.desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadInfo;