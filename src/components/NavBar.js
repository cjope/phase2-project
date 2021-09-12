import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div style={{padding:"20px", display:"flex"}}>
            <div style={{display:"flex", flex:1}}>
                <NavLink className="nav-bar" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-bar" to="/Movies">
                    Movies
                </NavLink>
                <NavLink className="nav-bar" to="/MyMovies">
                    My Movies
                </NavLink>
                <NavLink className="nav-bar" to="/SignIn">
                    Sign In
                </NavLink>
            </div>
            <div style={{flex:1}}>
                <div style={{float:"right"}}>
                    <input ></input>
                </div>
            </div>
            <div style={{flex:0, paddingLeft:"10px"}}>
                <div style={{float:"auto"}}>
                    <button>Search</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default NavBar