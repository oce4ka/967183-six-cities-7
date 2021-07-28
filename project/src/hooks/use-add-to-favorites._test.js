import {renderHook, act} from '@testing-library/react-hooks';
import useAddToFavorites from './use-add-to-favorites';
import {Provider} from 'react-redux'
import configureStore from "redux-mock-store";
import * as ReactRedux from 'react-redux'

// todo: doesn't work

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

describe('Hook: useAddToFavorites', () => {
  beforeAll(() => {

  });

  it('should return 1 element', () => {

    const {result} = renderHook(() => {
      useAddToFavorites(1, 1);
    });

    const handleClick = result.current;

    expect(handleClick).toHaveLength(1);
    expect(handleClick).toBeInstanceOf(Function);
  });
  /*
    it('should be correctly change state', () => {
      const expectedInitialAnswers = [false, false, false, false];
      const {result} = renderHook(
        () => useUserAnswers(questionMock, jest.fn()),
      );

      const [initialAnswers] = result.current;
      let [,, handleAnswerChange] = result.current;

      act(() => handleAnswerChange(1, true));

      [,, handleAnswerChange] = result.current;
      act(() => handleAnswerChange(3, true));

      const [answers] = result.current;
      expect(initialAnswers).toStrictEqual(expectedInitialAnswers);
      expect(answers[1]).toBe(true);
      expect(answers[3]).toBe(true);
    });

    it('should be call onAnswer', () => {
      const onAnswer = jest.fn();
      const {result} = renderHook(() =>
        useUserAnswers(questionMock, onAnswer),
      );
      const [answers, handleAnswer] = result.current;
      handleAnswer();

      expect(onAnswer).toBeCalled();
      expect(onAnswer).toHaveReturnedWith(undefined);
      expect(onAnswer).toHaveBeenCalledWith(questionMock, answers);
    });
   */
});
