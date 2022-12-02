import { CHANGE_FIELD_VALUE, CONNECT_USER, LOGOUT } from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  pseudo: '',
  isLogged: false,
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        pseudo: '',
        isLogged: false,
        token: '',
      };
    case CONNECT_USER:
      return {
        ...state,
        email: '',
        password: '',
        pseudo: action.pseudo,
        isLogged: action.logged,
        token: action.token,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
