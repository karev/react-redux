import * as Types from '../actions/actionTypes';

export default function recipeReducer(state = { list: [] }, action) {
  switch (action.type) {
    case Types.CREATE_RECIPE_REQUEST:
      return {...state, isFetching: true};
    case Types.CREATE_RECIPE_SUCCESS:
      return {list: [...state.list, action.recipe]};
    case Types.CREATE_RECIPE_FAILURE:
      return {...state, error: action.error.message };
    case Types.GET_RECIPES_SUCCESS:
      return {...state, list: action.result, isFetching: false};
    case Types.GET_RECIPES_FAILURE:
      return {...state, error: action.error.message };
    case Types.GET_RECIPES_REQUEST:
      return {...state, isFetching: true};
    default:
      return state;
  }
}
