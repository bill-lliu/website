//used for rerouting everything else
//no starting state, so no class here

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage.js';
import About from './about.js';
import Portfolio from './portfolio.js';
import Resume from './resume.js';
import Contact from './contact.js';

const Main = () => (
    <Switch>
        <Route exact path = "/" component = {LandingPage} />
        <Route path = "/about" component = {About} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/portfolio" component = {Portfolio} />
        <Route path = "/resume" component = {Resume} />
    </Switch>
);

export default Main;