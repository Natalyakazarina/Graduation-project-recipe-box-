import { connect } from "react-redux";
import Recipes from "../components/Recipes";

const mapStateToProps = (state) => {
  return {
    items: state.recipes.recipes,
    localStorageRecipesError: state.recipes.localStorageRecipesError,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);