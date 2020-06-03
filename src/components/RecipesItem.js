import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import EditRecipes from "../containers/EditRecipes";

function RecipesItem({ recipesData, fetchRecipeData, fetchRecipeDataError }) {
  let { id } = useParams();

  useEffect(() => {
    fetchRecipeData(id);
  }, []);

  useEffect(() => {
    if (fetchRecipeDataError) {
      alert(fetchRecipeDataError);
    }
  }, [fetchRecipeDataError]);

  return (
    <Container>
      <Typography variant="h4">Recipe Data</Typography>
      {recipesData && (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {recipesData.name}
            </Typography>
            <Typography color="textSecondary">
              {recipesData.description}
            </Typography>
          </CardContent>
        </Card>
      )}
      <EditRecipes currentRecipeId={+id} />
    </Container>
  );
}

RecipesItem.propTypes = {
  fetchRecipeData: PropTypes.func.isRequired,
  recipesData: PropTypes.object,
  fetchRecipeDataError: PropTypes.string,
};

export default RecipesItem;
