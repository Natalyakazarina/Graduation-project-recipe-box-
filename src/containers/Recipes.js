import { connect } from "react-redux";
import Recipes from "../components/Recipes";

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.recipes.recipes,
    localStorageRecipesError: state.recipes.localStorageRecipesError,
    isEditFormVisible: state.recipes.isEditFormVisible,
    currentlyEditing: state.recipes.currentlyEditing,
    editId: state.recipes.iditId,
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
    editRecipe: (editId) =>
      dispatch({
        type: "RECIPES/EDIT_RECIPE",
        payload: {
          editId,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
