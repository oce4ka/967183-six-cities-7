import {renderHook, act} from '@testing-library/react-hooks';
import useAddToFavorites from './use-add-to-favorites';
import {Provider} from 'react-redux'
import configureStore from "redux-mock-store";
import * as Redux from 'react-redux';
import {createMemoryHistory} from "history";

// todo: doesn't work

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

let history = null;

describe('Hook: useAddToFavorites', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should return 1 element', () => {

    const {result} = renderHook(() => {
      useAddToFavorites(1, 1);
    });

    const handleClick = result.current;

    // todo: why? handleClick Received has value: undefined - ждала функцию

    expect(handleClick).toHaveLength(1);
    expect(handleClick).toBeInstanceOf(Function);
  });

    it('should be called setOfferFavoritesStatus', () => {
      //const expectedInitialAnswers = [false, false, false, false];
      const {result} = renderHook(
        () => useAddToFavorites(1, 1),
      );

      //const [initialAnswers] = result.current;
      const handleClick = result.current;
      handleClick();

      act(() => handleClick());


      // todo: уже неправильно замокала выше?
      /*
      Error: expect(jest.fn()).toBeCalled()

      Expected number of calls: >= 1
      Received number of calls:    0
       */

      const dispatch = jest.fn();
      const useDispatch = jest.spyOn(Redux, 'useDispatch');
      const setOfferFavoritesStatus = jest.spyOn(Redux, 'useDispatch');
      useDispatch.mockReturnValue(dispatch);

      //expect(useDispatch).toBeCalledTimes(1);
      //expect(dispatch).nthCalledWith(1, [1,1]);

      expect(setOfferFavoritesStatus).toBeCalled();
      expect(setOfferFavoritesStatus).toHaveReturnedWith(undefined);
      expect(setOfferFavoritesStatus).toHaveBeenCalledWith(1, 1);
    });

    /*
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
