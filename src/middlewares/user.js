import axios from 'axios';
import { fetchFavorites } from '../actions/recipes';

import { connectUser, LOGIN } from '../actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();

      axios.post('http://localhost:3001/login', {
        email: email,
        password: password,
      })
        .then((response) => {
          store.dispatch(connectUser(
            response.data.pseudo,
            response.data.logged,
            response.data.token,
          ));

          store.dispatch(fetchFavorites());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default user;
