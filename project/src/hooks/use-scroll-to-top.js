import {useEffect, useRef} from 'react';

const useScrollToTop = (updateDependancy, elementToScrollIsWindow = false) => {
  const elementToScrollRef = useRef(null);

  useEffect(() => {
    try { // I added this block to allow jest to test .scrollTo - don't know how to resolve it another way
      elementToScrollRef.current && elementToScrollRef.current.scrollTo({left: 0, top: 0, behavior: 'smooth'});
      elementToScrollIsWindow && window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    } catch (error) {
      window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
    }
  }, [updateDependancy, elementToScrollRef, elementToScrollIsWindow]);

  return elementToScrollRef;
};

export default useScrollToTop;
