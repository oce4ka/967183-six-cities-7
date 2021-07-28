import {renderHook, act} from '@testing-library/react-hooks';
import useMapInteraction from './use-map-interaction';

let activePlaceIdInitial, activeMarkerIdInitial = null;
describe('Hook: useMapInteraction', () => {
  beforeAll(() => {
    activePlaceIdInitial = 1;
    activeMarkerIdInitial = 1;
  });

  it('should return array with 3 elements', () => {
    const {result} = renderHook(() =>
      useMapInteraction(activePlaceIdInitial, activeMarkerIdInitial),
    );

    const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = result.current;

    expect(result.current).toHaveLength(1);
    expect(result.current).toBeInstanceOf(Object);

    expect(typeof activeMarkerId).toBe('number')
    expect(setActiveMarker).toBeInstanceOf(Function);
    expect(typeof activePlaceId).toBe('number')
    expect(setActivePlace).toBeInstanceOf(Function);
  });


  it('should be correctly change state', () => {
    const expectedInitialPlaceId = [1, 2, 3];
    const {result} = renderHook(
      () => useMapInteraction(activePlaceIdInitial, activeMarkerIdInitial),
    );

    const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = result.current;
    // const [initialAnswers] = result.current;
    // let [,, handleAnswerChange] = result.current;

    act(() => setActiveMarker(jest.fn(), [activeMarkerId]));
    act(() => setActivePlace(jest.fn(), [activePlaceId]));

    [,, handleAnswerChange] = result.current;
    act(() => handleAnswerChange(3, true));

    const [answers] = result.current;
    expect(initialAnswers).toStrictEqual(expectedInitialAnswers);
    expect(answers[1]).toBe(true);
    expect(answers[3]).toBe(true);
  });
});
