import React from 'react';
import { Router } from '@reach/router';

// Pages
import Home from '../pages/Home';
import Wines from '../pages/Wines';
import Story from '../pages/Story';
import Contact from '../pages/Contact';
import NotFound from '../pages/404'

const Routers = () => {
    return (
        <Router>
            <Home path="/:lang" />
            <Wines path="/wines" /> 
            <Story path="/story" /> 
            <Contact path="/contact/" />
            <NotFound default />  
        </Router>
    );
};

export default Routers;
