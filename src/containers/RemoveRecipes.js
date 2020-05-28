import { connect } from "react-redux";
import RemoveRecipes from "../components/RemoveRecipes";

const mapStateToProps = (state) => {
  return {
    items: state.recipes.recipes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearAll: () =>
      dispatch({
        type: "RECIPES/ALL_REMOVE",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveRecipes);
