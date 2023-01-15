import Link from 'next/link';
import menu from 'data/menu.json';
import { useRef, useMemo } from 'react';

import useObserver from 'utils/useObserver';

import LOGO_ICON from 'src/assets/images/logo_icon.svg';

const Main = () => {
  const observerRef = {
    bg: useRef(null),
    text: useRef(null),
  };
  const observer = {
    text: useObserver(observerRef.text, { threshold: 0.3 }),
    bg: useObserver(observerRef.bg, { threshold: [0.8, 0.9] }),
  };
  const getScrollAni = useMemo(() => {
    if (observer.bg.isViewRatio < 0.9) {
      return {
        text: 'Main__text-container--show',
        bg: 'Main__bg',
      };
    }
    return {
      text: 'Main__text-container',
      bg: 'Main__bg--show',
    };
  }, [observer.bg.isViewRatio]);

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
        <div className={getScrollAni.text} ref={observerRef.text}>
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
      <div className={getScrollAni.bg} ref={observerRef.bg} />
    </section>
  );
};

export default Main;
