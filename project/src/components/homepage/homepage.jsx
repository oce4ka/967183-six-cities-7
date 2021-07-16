import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomepageContent from './homepage-content';
import Page from './../app/page';
import Main from '../app/main';
import CitiesList from './cities-list';
import {changeCity} from '../../store/action';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';
import {getOffersByCity} from '../../store/offer-data/selectors';
import {getCity} from '../../store/seek-process/selectors';
import Settings from '../../const';

function Homepage(props) {
  const cityPlaceArray = Settings.CITY_PLACES;

  const currentCity = useSelector(getCity);
  const offersArray = convertKeysToCamel(useSelector(getOffersByCity(currentCity)));

  const dispatch = useDispatch();

  const onChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList onChangeCity={onChangeCity} cityPlaceArray={cityPlaceArray} currentCity={currentCity}/>
        <HomepageContent offersArray={offersArray} currentCity={currentCity}/>
      </Main>
    </Page>
  );
}

export default Homepage;
