import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles/index";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import { Redirect } from "react-router-dom";

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

const EditAddForm = ({ items, onSubmit, reset, addSuccessfully }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect((e) => {
    if (items) {
      setName(items.name);
      setDescription(items.description);
    }
   
  }, [items]);


  if (addSuccessfully) {
    reset();
    return <Redirect to="/recipes" />;
  }

  const submit = (e) => {
    e.preventDefault();
    const obj = { name, description };
    if (items) {
      obj.id = items.id;
    }
    onSubmit.bind(this, obj);
  };

  function clearForm() {
    setName("");
    setDescription("");
  }

  return (
    <div>
      <form>
        <div className="add-form">
          <DialogContent>
            <label className="label" htmlFor="name">
              Name
            </label>
            <TextField
              className={classes.texts}
              onChange={setName}
              autoFocus
              margin="dense"
              id="name"
              placeholder={`Enter Name`}
              type="text"
              fullWidth
              value={name}
              variant="outlined"
            />
            <label className="label" htmlFor="description">
              Description
            </label>
            <TextField
              className={classes.texts}
              id="description"
              multiline
              rowsMax={6}
              value={description}
              onChange={setDescription}
              placeholder={`Enter Description`}
              variant="outlined"
            />
         
          <div className="buttons-changes">
            <button type="reset" className="changes btn btn-danger">
              <NavLink className="Navlinks" to={`/recipes`}>
                Cancel
              </NavLink>
            </button>
            <button
              type="reset"
              className="changes btn btn-secondary"
              onClick={clearForm.bind(this)}
            >
              Reset
            </button>
            <button
              type="submit"
              className="changes btn btn-success"
              onClick={submit}
            >
              Submit
            </button>
          </div>
          </DialogContent>
        </div>
      </form>
    </div>
  );
};

EditAddForm.propTypes = {
  onSubmit: PropTypes.func,
    items: PropTypes.object,
};

export default EditAddForm;
