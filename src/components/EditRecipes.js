import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles/index";
import EditAddForm from "./EditAddForm";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "500px",
    backgroundColor: "#508cf9",
    marginTop: "5%",
    width: "1860px",
    marginRight: "10px",
  },
  texts: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});

function EditRecipes({
  addRecipe,
  errorMessage,
  name,
  description,
  currentRecipeId,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (errorMessage) {
      alert("Something went wrong. Try again later.");
    }
  }, [errorMessage]);

  function saveRecipe(data) {
    const newObj = Object.assign({}, data);

    newObj.recipeId = currentRecipeId;
    addRecipe(newObj);
  }

  return (
    <Container className={classes.container}>
      <div>
        <EditAddForm onSubmit={saveRecipe} />
      </div>
    </Container>
  );
}

EditRecipes.propTypes = {
  errorMessage: PropTypes.string,
  addRecipe: PropTypes.func,
};

export default EditRecipes;
