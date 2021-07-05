import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HomepageContent from './homepage-content';
import offerProp from './../offer/offer.prop';
import Page from './../app/page';
import Main from '../app/main';
import CitiesList from './cities-list';
import {ActionCreator} from '../../store/action';
import convertKeysToCamel from '../../utils/convert-keys-to-camel';

function Homepage(props) {
  const {cityPlaceArray, offersArray = [], currentCity = '', onChangeCity} = props;

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList onChangeCity={onChangeCity} cityPlaceArray={cityPlaceArray} currentCity={currentCity}/>
        <HomepageContent offersArray={offersArray.filter((offer) => (offer.city.name === currentCity))} currentCity={currentCity}/>
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
  offersArray: convertKeysToCamel(state.offers),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Homepage};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
