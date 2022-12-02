import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Favorites from 'src/components/Favorites';

import Loading from './Loading';

import './style.scss';
import { fetchRecipes } from '../../actions/recipes';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector((state) => state.recipes.loading);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location],
  );

  return (
    <div className="app">
      {loading && <Loading />}

      {!loading && (
        <>
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:slug" element={<Recipe />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </>
      )}
    </div>
  );
}

export default App;
