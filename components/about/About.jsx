import { useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu from 'data/menu.json';
import useObserver from 'utils/useObserver';
import Emoji from 'components/common/Emoji';
import LinkEmoji from 'components/common/LinkEmoji';

import ABOUT_BG from 'src/assets/images/about_bg.jpg';

const AboutView = () => {
  return (
    <>
      <About />
      <Project />
    </>
  );
};

const About = () => {
  const subText = 'AWESOME FOOD STORE에 오신 것을 환영합니다 :)';

  return (
    <section className='About'>
      <h1 className='About__title'>About</h1>
      <div className='About__content'>
        <div className='About__img-container'>
          <Image src={ABOUT_BG.src} fill alt='' />
        </div>
        <div className='About__emoji-container'>
          <Emoji symbol='👋' />
        </div>
        <p className='About__sub'>
          {Array.from(subText).map((el, idx) => {
            return (
              <span
                className='About__sub-word'
                key={`word${idx}`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {el}
              </span>
            );
          })}
        </p>
        <p className='About__desc'>
          어썸푸드스토어 홈페이지에 방문해 주셔서 감사합니다. <br />
          어썸푸드스토어는 개성 있는 다양한 맛집을 소개하는 서비스입니다. <br />
          특색 있는 맛집에서 특별한 미식 경험을 느껴 보세요.
        </p>
      </div>
    </section>
  );
};

const Project = () => {
  const innerRef = useRef(null);
  const observer = useObserver(innerRef, {
    threshold: [0.2, 0.4, 0.6],
  });

  const getScrollAni = useMemo(() => {
    if (observer.isViewRatio >= 0.4) {
      return 'Project__inner';
    }
    return 'Project__inner--hide';
  }, [observer.isViewRatio]);

  const infoList = [
    {
      emoji: '⏰',
      title: '제작 기간',
      data: '2023.01.12 ~ 2023.01.',
    },
    {
      emoji: '🖥️',
      title: '사용 기술스택',
      data: 'Next.js, JavaScript, SCSS',
    },
    {
      emoji: '📁',
      title: '구현 페이지',
      link: [
        { title: '메인 페이지', link: '/' },
        ...menu,
        { title: '404', link: '/404' },
      ],
    },
  ];
  return (
    <article className='Project'>
      <div className={getScrollAni} ref={innerRef}>
        <h2 className='Project__title'>Project Info</h2>
        <div className='Project__content'>
          <h3 className='Project__sub'>
            <Emoji symbol='🔍' />
            요약
          </h3>
          <ul className='Project__info'>
            {infoList.map((el, idx) => {
              return (
                <li className='Project__info-item' key={`infoList${idx}`}>
                  <div
                    className='Project__emoji'
                    style={{ animationDelay: `${idx * 0.7}s` }}
                  >
                    <Emoji symbol={el.emoji} />
                  </div>
                  <dl className='Project__info-inner'>
                    <dt className='Project__info-title'>{el.title}</dt>
                    <dd className='Project__info-data'>
                      <>
                        {el.data && el.data}
                        {el.link &&
                          el.link.map((menu) => {
                            return (
                              <Link
                                key={menu.title}
                                href={menu.link}
                                target='_blank'
                              >
                                {menu.title}
                              </Link>
                            );
                          })}
                      </>
                    </dd>
                  </dl>
                </li>
              );
            })}
          </ul>
          <h3 className='Project__sub'>
            <Emoji symbol='📝' />
            설명
          </h3>
          <p className='Project__desc'>
            Next.js 프레임워크를 이용하여 프론트엔드 과제를 구현하였습니다.{' '}
            <br />
            식욕을 돋우게 하는 오렌지 컬러를 primary 컬러로 선정하였고,
            커먼그라운드 사이트를 참고하여 Figma로 간단한 레이아웃을
            구성했습니다. <br />
            async/await 처리를 통해 서버에서 데이터 불러오기, 팝업 출력, 에러
            페이지에서 메인으로 이동 등의 기본 기능 이외 <br />
            IntersectionObserver를 이용한 스크롤 애니메이션 구현, 서버 통신 시
            로딩 및 에러화면 출력, 모달 바깥 클릭 시에도 모달 닫기 등의 기능을
            추가하였습니다. <br />
          </p>
          <h3 className='Project__sub'>
            <Emoji symbol='🎨' />
            사용 소스
          </h3>
          <ul className='Project__asset-list'>
            <li className='Project__asset-item'>
              이미지: Pixabay{' '}
              <LinkEmoji href='https://pixabay.com/ko/photos/%ec%8b%9d%eb%8b%b9-%ea%b0%80%ea%b5%ac-%ec%9d%b8%ed%85%8c%eb%a6%ac%ec%96%b4-1837150/' />
              <LinkEmoji href='https://pixabay.com/ko/photos/%eb%b9%b5-%ed%8c%a8%ec%8a%a4%ed%8a%b8%eb%a6%ac-%ed%81%ac%eb%a3%a8%ec%95%84%ec%83%81-1867459/' />
            </li>
            <li className='Project__asset-item'>
              아이콘: Figma plugin {`( Iconfy, Feather Icons)`}
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default AboutView;
