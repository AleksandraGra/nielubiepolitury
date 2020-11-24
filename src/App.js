//import logo from './logo.svg';
import React from "react";
import './scss/App.scss';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Navigation from "./js/Components/Navigation";
import Home from "./js/Components/Home";
import Form from "./js/Components/Form";
import NotFound from "./js/Components/NotFound";


export default function App() {
    return (
        <HashRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/form">
                        <Form/>
                    </Route>
                    <Route exact path="/" >
                        <Home/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}


