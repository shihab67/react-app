import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    console.log("submitted");
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
  }

  return (
    <Card
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <CardContent className="flex">
        <form
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="standard-basic"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
          />
        </form>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="outlined" color="primary">
          {isLoading ? (
            <i className="fas fa-circle-notch fa-spin"></i>
          ) : (
            "Login"
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
