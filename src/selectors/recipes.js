/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}
