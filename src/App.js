import React from "react";
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./js/Components/Home";
import Form from "./js/Components/form/Form";
import NotFound from "./js/Components/NotFound";


export default function App() {
    return (
        <>
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
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
        </>
    );
};


