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
});
