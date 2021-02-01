import React from "react";
import Home from "../components/Home";
import ToggleImage from "../components/ToggleImage";
import Images from "../components/Images";
import Login from "../components/Login";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/toggle-image",
    component: () => <ToggleImage />,
  },
  {
    path: "/api-images",
    component: () => <Images />,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
];
