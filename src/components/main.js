//main.js used for rerouting everything else
//no starting state, so no class here

import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./about.js";
import Contact from "./contact.js";
import LandingPage from "./landingpage.js";
import Portfolio from "./portfolio.js";
import Resume from "./resume.js";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
