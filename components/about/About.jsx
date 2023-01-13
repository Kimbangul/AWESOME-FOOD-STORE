import Image from 'next/image';
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
          <Image src={ABOUT_BG.src} fill />
        </div>
        <p className='About__sub'>{subText}</p>
        <p className='About__desc'>
          어썸푸드스토어는 개성 있는 다양한 맛집을 소개하는 서비스입니다. <br />
          특색 있는 맛집에서 특별한 미식 경험을 느껴 보세요.
        </p>
      </div>
    </section>
  );
};

const Project = () => {
  const infoList = [
    { title: '제작 기간', data: '2023.01.12 ~ 2023.01.' },
    { title: '사용 기술스택', data: 'Next.js, JavaScript, SCSS' },
    { title: '구현 페이지', data: '메인 페이지, ABOUT, STORE, 404' },
  ];
  return (
    <article className='Project'>
      <h2 className='Project__title'>프로젝트 소개</h2>
      <div className='Project__content'>
        <ul className='Project__info'>
          {infoList.map((el, idx) => {
            return (
              <li className='Project__info-item' key={`infoList${idx}`}>
                <dl className='Project__info-inner'>
                  <dt className='Project__info-title'>{el.title}</dt>
                  <dd className='Project__info-data'>{el.data} </dd>
                </dl>
              </li>
            );
          })}
        </ul>
        <p className='Project__desc'>
          Next.js 프레임워크를 이용하여 프론트엔드 과제를 구현하였습니다. <br />
        </p>
      </div>
    </article>
  );
};

export default AboutView;
