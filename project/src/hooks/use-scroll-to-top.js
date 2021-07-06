import {useEffect, useRef} from 'react';

const useScrollToTop = (updateDependancy, elementToScrollIsWindow = false) => {
  const elementToScrollRef = useRef(null);

  useEffect(() => {
    elementToScrollRef.current && elementToScrollRef.current.scrollTo(0, 0);
    elementToScrollIsWindow && window.scrollTo(0, 0);
  }, [updateDependancy, elementToScrollRef, elementToScrollIsWindow]);

  return elementToScrollRef;
};

export default useScrollToTop;
