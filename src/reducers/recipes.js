import { SAVE_RECIPES, SAVE_FAVORITES } from '../actions/recipes';

export const initialState = {
  loading: true,
  list: [],
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    case SAVE_RECIPES:
      return {
        ...state,
        loading: false,
        list: action.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
