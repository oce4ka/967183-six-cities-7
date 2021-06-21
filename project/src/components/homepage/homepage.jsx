import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HomepageContent from './homepage-content';
import offerProp from './../offer/offer.prop';
import Page from './../app/page';
import {ActionCreator} from '../../store/action';
import Main from '../app/main';
import CitiesList from './cities-list';

function Homepage(props) {
  const {cityPlaceArray, offersArray = [], currentCity = '', onChangeCity} = props;

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

Homepage.propTypes = {
  cityPlaceArray: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  offersArray: PropTypes.arrayOf(offerProp),
  currentCity: PropTypes.string,
  onChangeCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offersArray: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.showOffers());
  },
  /*
  showOffers() {
    dispatch(ActionCreator.showOffers());
  },
  */
});

export {Homepage};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
