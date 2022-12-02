import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

function Favorites() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const favoritesRecipes = useSelector((state) => state.recipes.favorites);

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={favoritesRecipes}
      />
    </Page>
  );
}

export default Favorites;
