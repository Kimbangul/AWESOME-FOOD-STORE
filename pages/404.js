import HeadInfo from 'utils/Head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import PageNotFound from 'components/404/PageNotFound';
import app from 'data/app.json';

export default function index() {
  return (
    <>
      <HeadInfo title={`404 Not Found :: ${app.title}`} />
      <Header />
      <PageNotFound />
      <Footer />
    </>
  )
}
