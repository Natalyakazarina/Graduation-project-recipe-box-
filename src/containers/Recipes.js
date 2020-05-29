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
    localStorageRecipes: () =>
      dispatch({
        type: "RECIPES/LOCAL_STORAGE",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
