import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Page from '../page/page';
import Main from '../main/main';
import MenuCities from '../menu-cities/menu-cities';
import {changeCity} from '../../store/action';
import {getOffersByCity} from '../../store/offer-data/selectors';
import {getCity} from '../../store/seek-process/selectors';
import Settings from '../../const';
import HomepageInnerContent from '../homepage-inner-content/homepage-inner-content';
import HomepageEmptyContent from '../homepage-empty-content/homepage-empty-content';

function HomepageScreen(props) {
  const cityPlaceArray = Settings.CITY_PLACES;

  const currentCity = useSelector(getCity);
  const offersArray = useSelector(getOffersByCity(currentCity));

  const dispatch = useDispatch();

  const onChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  const isOffersEmpty = !offersArray.length;

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className={isOffersEmpty ? 'page__main--index-empty page__main--index' : 'page__main--index'}>
        <h1 className="visually-hidden">Cities</h1>
        <MenuCities onChangeCity={onChangeCity} cityPlaceArray={cityPlaceArray} currentCity={currentCity}/>
        {isOffersEmpty ? <HomepageEmptyContent/> : <HomepageInnerContent offersArray={offersArray} currentCity={currentCity}/>}
      </Main>
    </Page>
  );
}

export default HomepageScreen;
