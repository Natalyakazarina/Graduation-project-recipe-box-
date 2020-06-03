import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles/index";
import {
  NavLink
} from "react-router-dom";

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
  editId,
  onItemRemove,
  fetchRecipes,
  localStorageRecipesError,
  openEditForm,
  closeEditForm,
  isEditFormVisible,
  editRecipe,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
function addField(name, e) {
    switch (name) {
      case "Name":
        setName(e.target.value);

        break;
      case "Description":
        setDescription(e.target.value);
        break;
      default:
        alert("Нет таких значений");
    }
  }
  

  function openForm() {
    openEditForm();
  }


  function editCurrentRecipe(e) {
    // e.preventDefault();

    
    editRecipe({
      name,
      description,
    });
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
      {
        <React.Fragment>
          <Dialog
            open={isEditFormVisible}
            onClose={closeEditForm}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Edit current recipe
            </DialogTitle>
            <DialogContent>
              <TextField
                onChange={addField.bind(this, "Name")}
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                defaultValue={name}
              />
              <TextField
                id="description"
                label="Description"
                multiline
                rowsMax={4}
                defaultValue={description}
                onChange={addField.bind(this, "Description")}
                fullWidth
              />
            </DialogContent>
            <button
              type="submit"
              className="btn btn-success"
              onClick={editCurrentRecipe}
            >
              save changes
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeEditForm}
            >
              close
            </button>
          </Dialog>
        </React.Fragment>
      }

      <ul className="list-group">
        {items.map(({ id, index, name, description }) => (
          <li
            key={index}
            className="list-group-item justify-content-between align-items-center"
          >
            <div className={classes.header}>
              <h3>{name}</h3>
              <div className="btn btn-group">
                <button className="btn btn-outline-success" onClick={openForm}>
                  Edit This Recipe
                </button>
                <button className="btn btn-outline-primary"><NavLink className='nav-link' to={`/recipes/${id}`}>Show details</NavLink></button>
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
