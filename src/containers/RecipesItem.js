import {connect} from 'react-redux';

import RecipesItem from "../components/RecipesItem";

const mapStateToProps = state => {
  return {
    recipesData: state.recipes.recipesData,
    fetchRecipeDataError: state.recipes.fetchRecipeDataError
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipeData: (id) => dispatch({
        type: "RECIPES/FETCH_RECIPE_DATA",
        payload: id,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesItem);