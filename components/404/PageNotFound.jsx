import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import ALERT_320 from 'src/assets/images/alert_320.svg';

const PageNotFound = () => {
  const router = useRouter();

  // PARAM state
  const [time, setTime] = useState(5);

  // FUNCTION timer execute
  useEffect(() => {
    if (time <= 0) {
      router.push('/');
      return;
    }

    const timer = () => {
      setTime((prev) => prev - 1);
      return;
    };
    const execTimer = setTimeout(timer, 1000);
    return () => clearTimeout(execTimer);
  }, [time]);

  return (
    <>
      <section className='PageNotFound'>
        <ALERT_320 className='PageNotFound__icon' />
        <h1 className='PageNotFound__title'>404 Not Found.</h1>
        <p className='PageNotFound__desc'>
          존재하지 않는 URL입니다. <br />
          <span className='PageNotFound__time'>{time}</span>초 뒤 메인 페이지로
          돌아갑니다.
        </p>
      </section>
    </>
  );
};

export default PageNotFound;
