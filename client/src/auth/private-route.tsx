import React from "react";
import { IndexRouteProps, LayoutRouteProps, Link, PathRouteProps, Route } from "react-router-dom";

const PrivateRoute = (props: JSX.IntrinsicAttributes & (PathRouteProps | LayoutRouteProps | IndexRouteProps)) => {
  const token = localStorage.getItem("auth");
  return <>{token ? <Route {...props} /> : <Link to="/login" />}</>;
};

export default PrivateRoute;