import {renderHook, act} from '@testing-library/react-hooks';
import useMapInteraction from './use-map-interaction';
import useOffersSorting from "./use-offers-sorting";
import {SortOffersOptions} from "../const";

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

  it('should be changed activeMarkerId/activePlaceId on setActiveMarker/setActivePlace', () => {
    const {result} = renderHook(
      () => useMapInteraction(activePlaceIdInitial, activeMarkerIdInitial),
    );

    const [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}] = result.current;

    act(() => setActiveMarker(2));
    act(() => setActivePlace(2));

    const [{activeMarkerId: activeMarkerId1, activePlaceId: activePlaceId1}] = result.current;

    expect(activeMarkerId).toStrictEqual(1);
    expect(activePlaceId).toStrictEqual(1);
    expect(activeMarkerId1).toStrictEqual(2);
    expect(activePlaceId1).toStrictEqual(2);
  });
});
