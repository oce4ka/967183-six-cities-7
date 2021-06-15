/* eslint-disable no-console */
import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../offer/offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SETTINGS, {CITIES} from '../../const';

// Todo: ? import useMap from '../../hooks/use-map';

const drawMapAnchors = (mapInstance, offersArray, currentOffer) => {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: SETTINGS.URL_MARKER_DEFAULT,
    iconSize: [27, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: SETTINGS.URL_MARKER_CURRENT,
    iconSize: [27, 39],
  });

  offersArray.forEach((offer) => {
    (currentOffer && (offer.id === currentOffer.id)) ?
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: currentCustomIcon})
        .addTo(mapInstance) :
      leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: defaultCustomIcon})
        .addTo(mapInstance);
  });
};

function Map(props) {
  const {offersArray, activePlaceId, currentCity = ''} = props;
  const currentOffer = offersArray.filter((offer) => (offer.id === activePlaceId))[0]; // get array with current offer only
  const mapRef = useRef(null);
  const [map, setMap] = useState(null); // keep map instance in state

  useEffect(() => { // init map
    //console.log('componentDidMount');
    const city = CITIES.filter((cityItem) => currentCity === cityItem.name)[0] || CITIES[0];
    const mapInstance = leaflet.map(mapRef.current, {
      center: city.coords,
      zoom: city.zoom,
      zoomControl: false,
      marker: true,
    });
    mapInstance.setView(city.coords, city.zoom);
    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(mapInstance);
    drawMapAnchors(mapInstance, offersArray, null);
    setMap(mapInstance); // send map instance to state
  }, [offersArray, currentCity]);

  useEffect(() => {
    //console.log('componentWillUpdate');
    map && drawMapAnchors(map, offersArray, currentOffer);
  }, [activePlaceId, currentOffer, map, offersArray]);

  return (
    <section ref={mapRef} className="cities__map map"></section>
  );
}

Map.propTypes = {
  offersArray: PropTypes.arrayOf(offerProp),
  activePlaceId: PropTypes.number.isRequired,
  currentCity: PropTypes.string,
};

export default Map;
