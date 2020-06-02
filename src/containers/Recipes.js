import { connect } from "react-redux";
import Recipes from "../components/Recipes";

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.recipes.recipes,
    localStorageRecipesError: state.recipes.localStorageRecipesError,
    isEditFormVisible: state.recipes.isEditFormVisible,
    currentlyEditing: state.recipes.currentlyEditing,
    ...ownProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onItemRemove: (id) =>
      dispatch({
        type: "RECIPES/RECIPE_REMOVE",
        payload: {
          id,
        },
      }),
    fetchRecipes: () =>
      dispatch({
        type: "RECIPES/FETCH_RECIPES",
      }),
    openEditForm: () =>
      dispatch({
        type: "RECIPES/OPEN_EDIT_FORM",
      }),
    closeEditForm: () =>
      dispatch({
        type: "RECIPES/CLOSE_EDIT_FORM",
      }),
    editRecipe: (params) =>
      dispatch({
        type: "RECIPES/EDIT_RECIPE",
        payload: {
          params,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
