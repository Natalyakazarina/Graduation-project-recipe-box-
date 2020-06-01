import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import { Switch, Route, NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import RecipeForm from "./components/RecipeForm";
import EditRecipes from "./containers/EditRecipes";
import Recipes from "./containers/Recipes";
import RemoveRecipes from "./containers/RemoveRecipes";
import ButtonsList from "./components/ButtonsList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginLeft: "10px",
  },
  paper: {
    backgroundColor: "#937aea",
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "500px",
    margin: "auto",
    height: "500px",
  },
  list: {
    paddingLeft: "10px",
  },
  color: {
    backgroundColor: "#1dd293",
    width: "300px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList className={classes.list}>
          <MenuItem>
            <FontAwesomeIcon icon={faUtensils} />
            <NavLink className="nav-link" activeClassName="active" to="/" exact>
              <Typography variant="h6">Free Code Camp Recipe Box</Typography>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink activeClassName="active" to="/add-recipes">
              <Button
                variant="contained"
                color="default"
                className={classes.color}
              >
                Add a New Recipe
              </Button>
            </NavLink>
          </MenuItem>

          <MenuItem>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/recipes"
            >
              <Button
                variant="contained"
                color="default"
                className={classes.color}
              >
                Show All Recipes
              </Button>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <RemoveRecipes />
          </MenuItem>
          <Typography variant="h6">Recipe List</Typography>
          <MenuItem>
            <Button variant="contained" color="default" disableElevation>
              Beef Wellington
            </Button>
          </MenuItem>
          <MenuItem>
            <ButtonsList />
          </MenuItem>
        </MenuList>
      </Paper>

      <Switch>
        <Route exact path="/">
          <RecipeForm />
        </Route>
        <Route path="/add-recipes">
          <EditRecipes />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
