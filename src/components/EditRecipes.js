import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles/index";
import { Redirect } from "react-router-dom";

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
  texts: {
    width: "600px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});

function EditRecipes({ addRecipe, errorMessage, editSuccessfully, reset }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (errorMessage) {
      alert("Something went wrong. Try again later.");
    }
  }, [errorMessage]);

  function saveRecipe(e) {
    e.preventDefault();

    addRecipe({
      name,
      description,
    });
  }

  function changeField(name, e) {
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

  const classes = useStyles();

  if (editSuccessfully) {
    reset();

    return <Redirect to="/recipes" />;
  }

  return (
    <Container className={classes.container}>
      <div>
        <form>
          <DialogContent>
            <label htmlFor="name">{"Name"}</label>
            <TextField
              className={classes.texts}
              onChange={changeField.bind(this, "Name")}
              autoFocus
              margin="dense"
              id="name"
              placeholder={`Enter Name`}
              type="text"
              fullWidth
              value={name}
              variant="outlined"
            />

            <label htmlFor="standard-multiline-flexible">{"Description"}</label>

            <TextField
              className={classes.texts}
              id="standard-multiline-flexible"
              multiline
              rowsMax={4}
              value={description}
              onChange={changeField.bind(this, "Description")}
              placeholder={`Enter Description`}
              variant="outlined"
            />
          </DialogContent>

          <button
            type="submit"
            className="btn btn-success"
            onClick={saveRecipe}
          >
            Submit
          </button>
          <button type="reset" className="btn btn-danger">
            Cancel
          </button>
        </form>
      </div>
    </Container>
  );
}

EditRecipes.propTypes = {
  saveRecipe: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  editSuccessfully: PropTypes.bool,
  reset: PropTypes.func,
};

export default EditRecipes;
