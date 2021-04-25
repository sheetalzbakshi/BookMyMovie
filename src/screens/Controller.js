import React from "react";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import DetailsPage from "./details/Details";
import Home from "./home/Home";

const Controller = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/movie" component={DetailsPage} />                             
                    <Route path="/" exact component={Home} />                                           
                </Switch>
            </div>
        </Router>
    );
};

export default Controller;
