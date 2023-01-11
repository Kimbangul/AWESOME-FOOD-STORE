import HeadInfo from 'utils/Head';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Store from 'components/store/Store';

export default function index() {
  return (
    <>
      <HeadInfo />
      <Header />
      <Store />
      <Footer />
    </>
  )
}
