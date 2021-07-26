import {useRef, React, useState} from 'react';
import {Link} from 'react-router-dom';
import Page from '../page/page';
import Main from '../main/main';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isUserLoggedIn} from '../../utils/check-auth';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getErrorMessage} from '../../store/seek-process/selectors';
import {changeCity} from '../../store/action';
import {validateAuth} from '../../utils/validate-auth';

function LoginScreen() {

  const loginRef = useRef();
  const passwordRef = useRef();

  const [errorMessage, setErrorMessage] = useState('');

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const serverErrorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrorMessage('');
    const email = loginRef.current.value;
    const password = passwordRef.current.value;

    if (validateAuth({email, password})) {
      dispatch(login({
        login: email,
        password: password,
      }));
    } else {
      setErrorMessage('The email or password is incorrect.');
    }
  };

  if (isUserLoggedIn(authorizationStatus)) {
    return (
      <Redirect to={AppRoute.ROOT}/>
    );
  }

  const handleRedirectToCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <Page className="page--gray page--login">
      <Main className="page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="/" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input data-testid="login" ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input data-testid="password" ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              {errorMessage && <div>{errorMessage}<br/></div>}
              {serverErrorMessage && <div>{serverErrorMessage} Check your login and password again.</div>}
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link onClick={() => handleRedirectToCity('Amsterdam')} className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </Main>
    </Page>
  );
}

export default LoginScreen;
