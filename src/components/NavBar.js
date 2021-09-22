import {NavLink, /*useHistory*/} from "react-router-dom"
import Filter from "./Filter"

function NavBar(){

    // const history = useHistory()

    // function handleClick( ){
    //     history.push("/MyMovies")
    // }

    return(
        <div className="nav-all">
            <div style={{display:"flex", flex:5}}>
                <NavLink className="nav-bar" to="/">Home</NavLink>
                <NavLink className="nav-bar" to="/Movies">Movies</NavLink>
                <NavLink className="nav-bar" to="/MyMovies">My Movies</NavLink>
                <NavLink className="nav-bar" to="/SignIn">Sign In</NavLink>
                <div style={{flex:2}}>
                    <div style={{float:"right", marginRight:"5%", marginTop:"2%"}}>
                        <Filter/>
                    </div>
                </div>
            </div>
            {/* <button onClick={handleClick}>Test</button> */}
        </div>
    )
}

export default NavBar