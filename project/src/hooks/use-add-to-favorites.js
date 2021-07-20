/* eslint-disable no-console */
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../store/user/selectors';
import {isUserLoggedIn} from '../utils/check-auth';
import {AppRoute} from '../const';
import {setOfferFavoritesStatus} from '../store/api-actions';

const useAddToFavorites = (offerId, status) => {
  const history = useHistory();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();


  const handleClick = () => {
    console.log('setStatus', status); // todo: не перерисовывается карточка в nearby, менять в массиве nearby в state
    (!isUserLoggedIn(authorizationStatus)) ? history.push(AppRoute.LOGIN) : dispatch(setOfferFavoritesStatus(offerId, status));
  };
  return handleClick;
};

export default useAddToFavorites;
