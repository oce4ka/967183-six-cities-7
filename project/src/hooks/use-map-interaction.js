import {useState, useCallback} from 'react';

const useMapInteraction = (activePlaceIdInitial, activeMarkerIdInitial) => {
  const [activePlaceId, setActivePlaceId] = useState(activePlaceIdInitial);
  const [activeMarkerId, setActiveMarkerId] = useState(activeMarkerIdInitial);

  const setActivePlace = useCallback(
    (offerId) => setActivePlaceId(offerId), [setActivePlaceId],
  );

  const setActiveMarker = useCallback(
    (offerId) => setActiveMarkerId(offerId), [setActiveMarkerId],
  );

  return [{activeMarkerId, setActiveMarker, activePlaceId, setActivePlace}];
};

export default useMapInteraction;
