import HeadInfo from 'utils/Head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Page from 'components/layout/Page';
import Main from 'components/main/Main';

export default function index() {
  return (
    <>
      <HeadInfo />
      <Header />
      <Page>
        <Main />
      </Page>
      <Footer />
    </>
  )
}
