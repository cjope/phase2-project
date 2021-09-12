import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="nav-all">
            <div style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/">Home</NavLink>
                <NavLink className="nav-bar" to="/Movies">Movies</NavLink>
                <NavLink className="nav-bar" to="/MyMovies">My Movies</NavLink>
                <NavLink className="nav-bar" to="/SignIn">Sign In</NavLink>
                <div style={{flex:2}}>
                    <div style={{float:"right", marginRight:"5%", marginTop:"2%"}}>
                        <input style={{borderColor:"orange"}}></input>
                        <button style={{backgroundColor:"orange"}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar