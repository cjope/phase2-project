import React from 'react';
import {Route, Switch} from "react-router-dom"
import './index.css';
import Home from "./components/Home"
import Movies from "./components/Movies"
import MyMovies from "./components/MyMovies"
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';

function App(){
    return(
        <div>
            <NavBar/>
            <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Movies">
                <Movies/>
            </Route>
            <Route exact path="/MyMovies">
                <MyMovies/>
            </Route>
            <Route exact path="/SignIn">
                <SignIn/>
            </Route>
            </Switch>
        </div>
    )
}

export default App