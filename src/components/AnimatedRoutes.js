/** @format */

import React from "react";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Switch, useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
};

export default AnimatedRoutes;
