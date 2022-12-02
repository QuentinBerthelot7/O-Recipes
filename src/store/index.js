import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import recipes from '../middlewares/recipes';
import user from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipes, user),
);

const store = createStore(reducer, enhancers);

export default store;
