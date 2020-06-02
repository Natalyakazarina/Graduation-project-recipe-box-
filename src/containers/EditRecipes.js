import { connect } from "react-redux";

import EditRecipes from "../components/EditRecipes";

const mapStateToProps = (state, ownProps) => {
  return {
    // errorMessage: state.recipes.createRecipeErrorMessage,
    addSuccessfully: state.recipes.addSuccessfully,
    localStorageRecipesError: state.recipes.localStorageRecipesError,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch, state) => {
  return {
    addRecipe: (params) =>
      dispatch({
        type: "RECIPES/ADDED_NEW_RECIPE",
        payload: {
          params,
        },
      }),
    reset: () =>
      dispatch({
        type: "RECIPES/RESET_EDIT",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipes);
