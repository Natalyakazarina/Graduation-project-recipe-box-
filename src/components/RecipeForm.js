import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "500px",
    backgroundColor: "#508cf9",
    marginTop: "5%",
    textAlign: "right",
    width: "1860",
    marginRight: "10px",
  },
  title: {
    marginBottom: "30px",
  },
  fonts: {
    maxWidth: "50%",
    fontWeight: "400px",
    marginTop: "20px",
  },
});

function RecipeForm() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        This is a Recipe App
      </Typography>
      <Typography variant="h4">You can record your recipes here</Typography>
      <Typography variant="h6" className={classes.fonts}>
        All your recipes are stored in your browser's local storage and any
        changes you make will remain saved as long as you continue to access
        this page from the same browser.
      </Typography>
    </Container>
  );
}

export default RecipeForm;
