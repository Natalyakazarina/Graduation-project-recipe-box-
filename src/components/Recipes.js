import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "500px",
    backgroundColor: "#508cf9",
    marginTop: "5%",
    width: "1860",
    marginRight: "10px",
  },
});

function Recipes({
  items,
  onItemRemove,
  localStorageRecipes,
  localStorageRecipesError,
}) {
  useEffect(() => {
    localStorageRecipes();
  }, [localStorageRecipes]);

  useEffect(() => {
    if (localStorageRecipesError) {
      alert(localStorageRecipesError);
    }
  }, [localStorageRecipesError]);

  const classes = useStyles();

  function remove(id) {
    if (window.confirm("Are you sure?")) {
      onItemRemove(id);
    }
  }

  return (
    <Container className={classes.container}>
      {items.length === 0 && <h2>В вашей базе нет рецептов!</h2>}
      {items.length > 0 && <h2>Список всех доступных рецептов</h2>}
      <ul className="list-group">
        {items.map(({ id, name, description }) => (
          <li
            key={id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="btn btn-group">
              <button
                className="btn btn-outline-danger"
                onClick={remove.bind(this, id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Recipes.propTypes = {
  items: PropTypes.array,
  onItemRemove: PropTypes.func.isRequired,
  fetchRecipes: PropTypes.func,
  fetchRecipesErrorMessage: PropTypes.string,
};

export default Recipes;
