import {renderHook, act} from '@testing-library/react-hooks';
import useScrollToTop from "./use-scroll-to-top";

describe('Hook: useScrollToTop', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });
  });

  it('should return object', () => {
    const {result} = renderHook(() =>
      useScrollToTop([], true),
    );

    const elementToScrollRef = result.current;

    expect(elementToScrollRef).toBeInstanceOf(Object);
  });
});
