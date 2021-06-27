import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header';

import { HomePage } from './components/HomePage';
import { CategoryPage } from './components/CategoryPage';

export const App = () => {
    
    return (
        <div className="view">
            <Router>
                <Header />
                <Switch>
                    <Route path="/category/:name" render={(props) => <CategoryPage name={props.match.params.name} />} />
                    <Route exact path="/" render={HomePage} />
                </Switch>
            </Router>
        </div>
    );
}