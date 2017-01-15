import * as Types from './actionTypes';
import { getAllRecipes, createRecipe } from '../api/webApi';

export function createRecipeAction(recipe) {
  return {
    types: [Types.CREATE_RECIPE_REQUEST, Types.CREATE_RECIPE_SUCCESS, Types.CREATE_RECIPE_FAILURE],
    promise: createRecipe(recipe),
    recipe
  };
}

export function getRecipes() {
  return {
    types: [Types.GET_RECIPES_REQUEST, Types.GET_RECIPES_SUCCESS, Types.GET_RECIPES_FAILURE],
    promise: getAllRecipes()
  };
}
