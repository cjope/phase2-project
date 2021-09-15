import React, {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom"
import './index.css';
import Home from "./components/Home"
import Movies from "./components/Movies"
import MyMovies from "./components/MyMovies"
import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import Filter from './components/Filter';

function App(){

    const [movies, setMovies]=useState(null)
    const [page, setPage]=useState(1)

    function fetchMovies(page){
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=058b20ba9bda19035670479e41a673af&sort_by=popularity.desc&release_date.lte=2000-01-01&release_date.gte=1960-01-01&with_genres=27&page=${page}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }
    
    console.log(page)

    useEffect(()=>{
        fetchMovies(page)
        window.scrollTo(0,0)
    },[page])

    return(
        <div>
            <NavBar />
            <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/Movies" >
                {movies&&<Movies movies={movies} page={page} setPage={setPage} />}
            </Route>
            <Route exact path="/MyMovies">
                <MyMovies/>
            </Route>
            <Route exact path="/SignIn">
                <SignIn/>
            </Route>
            <Filter />
            </Switch>
            {/* <div className="page-buttons">
                <button className="button" onClick={()=>setPage(page+1)}>Next Page</button>
            </div> */}
        </div>
    )
}

export default App