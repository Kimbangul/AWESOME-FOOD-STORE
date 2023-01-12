import Link from 'next/link';
import menu from 'data/menu.json';
import useAPICall from 'utils/useAPICall';
import { StoreListView } from 'components/store/Store';

import LOGO_ICON from 'src/assets/images/logo_icon.svg';

const Main = () => {
  const storeList = useAPICall('GET', '/stores');

  const getLink = (title) => {
    const getMenu = menu.filter((el) => el.title === title);
    return getMenu[0].link;
  };

  return (
    <section className='Main'>
      <div className='Main__inner'>
        <div className='Main__icon'>
          <LOGO_ICON />
        </div>
        <div className='Main__text-container'>
          <h1 className='Main__title'>
            Welcome to <br />
            <span className='Main__title--uppercase'>Awesome food store</span>!
          </h1>
          <p className='Main__desc'>
            <span className='Main__desc--uppercase'>Awesome food store</span>
            에서 다양한 미식 브랜드들을 만나 보세요 {`:)`}
          </p>
        </div>
        <div className='Main__btn-container'>
          <Link href={getLink('STORE')}>스토어 바로가기</Link>
        </div>
      </div>
      <div className='Main__bg' />
      {/* <div className='Main__store-container'>
        <StoreListView data={storeList.data} />
      </div> */}
    </section>
  );
};

export default Main;
