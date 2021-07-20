import {useEffect, useRef} from 'react';

const useScrollToTop = (updateDependancy, elementToScrollIsWindow = false) => {
  const elementToScrollRef = useRef(null);

  useEffect(() => {
    elementToScrollRef.current && elementToScrollRef.current.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    elementToScrollIsWindow && window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }, [updateDependancy, elementToScrollRef, elementToScrollIsWindow]);

  return elementToScrollRef;
};

export default useScrollToTop;
