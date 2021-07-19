/* eslint-disable no-console */
import React, {useRef, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerProp from '../offer-screen/offer.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Settings, {AppRoute, Cities} from '../../const';

let currentMarkerFromHoveredPlacecard;

const drawMapAnchors = ({map, offersArray, currentOffer, setActiveMarker, markersLayer, history}) => {
  const defaultCustomIcon = leaflet.icon({
    iconUrl: Settings.URL_MARKER_DEFAULT,
    iconSize: [27, 39],
  });
  const currentCustomIcon = leaflet.icon({
    iconUrl: Settings.URL_MARKER_CURRENT,
    iconSize: [27, 39],
  });
  let hasHoveredPlacecard = false;

  offersArray.forEach((offer) => {
    if (currentOffer && (offer.id === currentOffer.id)) {
      currentMarkerFromHoveredPlacecard && map.removeLayer(currentMarkerFromHoveredPlacecard);
      currentMarkerFromHoveredPlacecard =
        leaflet
          .marker([offer.location.latitude, offer.location.longitude], {icon: currentCustomIcon, zIndexOffset: 9999});
      currentMarkerFromHoveredPlacecard.addTo(map);
      hasHoveredPlacecard = true;
    } else {
      const marker = leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon: defaultCustomIcon, riseOnHover: true, opacity: 1});
      marker.on('mouseover', () => {
        setActiveMarker(offer.id);
        marker.setIcon(currentCustomIcon);
      });
      marker.on('mouseout', () => {
        setActiveMarker(0);
        marker.setIcon(defaultCustomIcon);
      });
      marker.on('click', () => {
        history.push(AppRoute.OFFER.replace(':id', offer.id));
      });
      marker.addTo(markersLayer);
    }
    !hasHoveredPlacecard && currentMarkerFromHoveredPlacecard && map.removeLayer(currentMarkerFromHoveredPlacecard);
  });
};


function Map(props) {
  const {className, offersArray, activePlaceId, currentCity, setActiveMarker, removeMarkersOnUpdate = false} = props;
  const currentOffer = offersArray.filter((offer) => (offer.id === activePlaceId))[0]; // get array with current offer only
  const mapRef = useRef(null);
  const [map, setMap] = useState(null); // keep map instance in state
  const [markersLayer, setMarkersLayer] = useState(null); // keep map instance in state
  const history = useHistory();

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
      mapInstance.scrollWheelZoom.disable();
      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(mapInstance);
      setMap(mapInstance); // send map instance to state
    } else {
      map.flyTo(city.coords, city.zoom);
    }
    return () => {
      markersLayer && markersLayer.clearLayers(); // clear markers
    };

  }, [offersArray, currentCity, map, removeMarkersOnUpdate, markersLayer, currentOffer, setActiveMarker]);

  useEffect(() => {
    map && setMarkersLayer(leaflet.layerGroup().addTo(map));
  }, [map]);

  useEffect(() => {
    markersLayer && drawMapAnchors({map, offersArray, currentOffer, setActiveMarker, markersLayer, history});
  }, [activePlaceId, currentOffer, map, offersArray, setActiveMarker, markersLayer, history]);

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
  removeMarkersOnUpdate: PropTypes.bool,
};

export default React.memo(Map);