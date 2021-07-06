import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortOffersOptions} from './../../const';

function PlaceCardSortingSelect(props) {
  const {sortingPayload, setSortingPayload} = props;
  const [selectVisibilityFlag, setSelectVisibilityFlag] = useState(false);

  const toggleSelectVisibilityFlag = (evt) => {
    setSelectVisibilityFlag(!selectVisibilityFlag);
  };

  const handleClickSortSelect = (evt) => {
    toggleSelectVisibilityFlag();
  };

  const handleClickChooseSortOption = (evt) => {
    const optionSelected = evt.target.textContent;
    setSortingPayload(optionSelected);
    toggleSelectVisibilityFlag();
  };

  const getListItemClass = (currentSortOption) => (currentSortOption === sortingPayload ? 'places__option places__option--active' : 'places__option');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={handleClickSortSelect} className="places__sorting-type" tabIndex="0">{sortingPayload}
        <svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"></use></svg>
      </span>
      <ul className={`places__options places__options--custom ${selectVisibilityFlag && 'places__options--opened'}`}>
        <li onClick={handleClickChooseSortOption} className={getListItemClass(SortOffersOptions.POPULAR)} tabIndex="0">
          {SortOffersOptions.POPULAR}
        </li>
        <li onClick={handleClickChooseSortOption} className={getListItemClass(SortOffersOptions.PRICE_ASCENDING)} tabIndex="0">
          {SortOffersOptions.PRICE_ASCENDING}
        </li>
        <li onClick={handleClickChooseSortOption} className={getListItemClass(SortOffersOptions.PRICE_DESCENDING)} tabIndex="0">
          {SortOffersOptions.PRICE_DESCENDING}
        </li>
        <li onClick={handleClickChooseSortOption} className={getListItemClass(SortOffersOptions.RATING_DESCENDING)} tabIndex="0">
          {SortOffersOptions.RATING_DESCENDING}
        </li>
      </ul>
    </form>
  );
}

PlaceCardSortingSelect.propTypes = {
  sortingPayload: PropTypes.string.isRequired,
  setSortingPayload: PropTypes.func.isRequired,
};

export default React.memo(PlaceCardSortingSelect);
