/* eslint-disable no-console */
import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Settings, {Cities} from '../../const';

// Todo: Hook? needed? import useMap from '../../hooks/use-map';
// Todo: make HOC for Offer and Map - no need

const drawMapAnchors = (map, offersArray, currentOffer, setActiveMarker) => {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: Settings.URL_MARKER_DEFAULT,
    iconSize: [27, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: Settings.URL_MARKER_CURRENT,
    iconSize: [27, 39],
  });

  offersArray.forEach((offer) => {
    if (currentOffer && (offer.id === currentOffer.id)) {
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: currentCustomIcon, riseOnHover: true})
        .addTo(map);
    } else {
      const marker = leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: defaultCustomIcon, riseOnHover: true});
      marker.on('mouseover', () => {
        setActiveMarker(offer.id);
        marker.setIcon(currentCustomIcon);
      });
      marker.on('mouseout', () => {
        setActiveMarker(0);
        marker.setIcon(defaultCustomIcon);
      });
      marker.addTo(map);
    }
  });
};


function Map(props) {
  const {className, offersArray, activePlaceId, currentCity, setActiveMarker} = props;
  const currentOffer = offersArray.filter((offer) => (offer.id === activePlaceId))[0]; // get array with current offer only
  const mapRef = useRef(null);
  const [map, setMap] = useState(null); // keep map instance in state

  console.log(currentOffer);

  useEffect(() => { // init map
    const city = Cities.filter((cityItem) => currentCity === cityItem.name)[0] || Cities[0];
    if (mapRef.current !== null && map === null) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: city.coords,
        zoom: city.zoom,
        zoomControl: false,  // Todo: read
        marker: true, // Todo: read
      });
      mapInstance.setView(city.coords, city.zoom);
      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(mapInstance);
      drawMapAnchors(mapInstance, offersArray, null); //draw inactive anchors
      setMap(mapInstance); // send map instance to state
    } else {
      map.flyTo(city.coords);
    }
  }, [offersArray, currentCity, map]);

  useEffect(() => {
    map && drawMapAnchors(map, offersArray, currentOffer, setActiveMarker);
  }, [activePlaceId, currentOffer, map, offersArray, setActiveMarker]);

  return (
    <section ref={mapRef} className={className}></section>
  );
}

Map.propTypes = {
  className: PropTypes.string,
  offersArray: PropTypes.arrayOf(offerProp),
  activePlaceId: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired,
  setActiveMarker: PropTypes.func,
};

export default Map;
