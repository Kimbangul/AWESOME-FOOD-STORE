import HeadInfo from 'utils/Head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Page from 'components/layout/Page';
import About from 'components/about/About';

export default function index() {
  return (
    <>
      <HeadInfo />
      <Header />
      <Page>
        <About />
      </Page>
      <Footer />
    </>
  )
}
