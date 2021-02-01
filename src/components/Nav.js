import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React App
          </Typography>
          <ButtonGroup variant="text" aria-label="text primary button group">
            <Button component={Link} to={"/"}>
              Home
            </Button>
            <Button component={Link} to={"/toggle-image"}>
              Toggle Image
            </Button>
            <Button component={Link} to={"/api-images"}>
              Api Images
            </Button>
            <Button component={Link} to={"/login"}>
              Login
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
