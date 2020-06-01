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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function Recipes({
  items,
  onItemRemove,
  fetchRecipes,
  localStorageRecipesError,
}) {
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

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
      {items.length === 0 && (
        <div>
          <h2>В вашей базе нет рецептов!</h2>
          <img className="picture" src="zhdun.jpg" alt="zhdun" />
        </div>
      )}
      {items.length > 0 && <h2>Список всех доступных рецептов</h2>}

      <ul className="list-group">
        {items.map(({ id, name, description }) => (
          <li
            key={id}
            className="list-group-item justify-content-between align-items-center"
          >
            <div className={classes.header}>
              <h3>{name}</h3>
              <div className="btn btn-group">
                <button className="btn btn-outline-success">
                  Edit This Recipe
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={remove.bind(this, id)}
                >
                  Remove This Recipe
                </button>
              </div>
            </div>
            <div>
              <p>{description}</p>
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
