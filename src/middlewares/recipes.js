import axios from 'axios';

import {
  FETCH_FAVORITES,
  FETCH_RECIPES,
  saveFavorites,
  saveRecipes,
} from '../actions/recipes';

const recipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case FETCH_FAVORITES: {
      const { user: { token } } = store.getState();

      axios.get('http://localhost:3001/favorites', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveFavorites(response.data.favorites));
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

export default recipes;
