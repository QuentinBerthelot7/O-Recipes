import { useDispatch, useSelector } from 'react-redux';

import { changeFieldValue, login, logout } from 'src/actions/user';

import LoginForm from 'src/components/LoginForm';
import logo from 'src/assets/logo.png';
import './style.scss';

function AppHeader() {
  const { email, password, isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const changeField = (value, name) => {
    dispatch(changeFieldValue(name, value));
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        isLogged={isLogged}
        changeField={changeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
    </header>
  );
}

export default AppHeader;
