import {renderHook, act} from '@testing-library/react-hooks';
import useScrollToTop from "./use-scroll-to-top";

describe('Hook: useScrollToTop', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {value: jest.fn(), writable: true});
  });

  it('should return object', () => {
    const {result} = renderHook(() =>
      useScrollToTop([], true),
    );

    const elementToScrollRef = result.current;

    expect(elementToScrollRef).toBeInstanceOf(Object);

    /* todo: не работает без try catch (тоже самое в app, из-за homepage)
    // elementToScrollRef = useRef(null) - возвращает undefined
    // нашла способ мокать window.scrollTo, но не нашла elementToScrollRef.current.scrollTo - тут ругается
    // https://stackoverflow.com/questions/57805917/mocking-refs-in-react-function-component

    ● Console

    console.error
      Error: Uncaught [TypeError: elementToScrollRef.current.scrollTo is not a function]

    */
  });
});
