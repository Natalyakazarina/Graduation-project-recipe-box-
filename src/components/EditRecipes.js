import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

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
          <div className="form-group" key={name}>
            <label htmlFor="name">{"Name"}</label>
            <input
              value={name}
              className="form-control"
              id="name"
              placeholder={`Enter Name`}
              onChange={changeField.bind(this, "Name")}
              required
            />
            <label htmlFor="description">{"Description"}</label>
            <textarea
              value={description}
              onChange={changeField.bind(this, "Description")}
              className="form-control"
              id="description"
              rows="3"
              placeholder={`Enter Description`}
              required
            />
          </div>

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
