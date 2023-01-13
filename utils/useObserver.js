import { useState, useEffect, useRef } from 'react';

const useObserver = (target, option) => {
  const [isView, setIsView] = useState(false);
  const [isViewRatio, setIsViewRatio] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) {
      const observerCallback = (observeArr) => {
        observeArr.forEach((el) => {
          setIsViewRatio(el.intersectionRatio);
          if (el.isIntersecting) {
            setIsView(true);
          } else {
            setIsView(false);
          }
        });
      }
      observerRef.current = new IntersectionObserver(observerCallback, option);
    }
    if (target.current) {
      observerRef.current.observe(target.current);
    }

    return (() => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      return;
    })
  }, [target]);

  return { isView, isViewRatio };
}

export default useObserver;