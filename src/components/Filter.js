import { useState } from "react/cjs/react.development"

function Filter(){

    const [search, setSearch]=useState("")


    function handleSearchText(e){
        setSearch(e.target.value)
    }

    function handleSearchSubmit(e){
        e.preventDefault()
        console.log(`searched for: ${search}`)
        setSearch("")
    }

    return(

        <form onSubmit={handleSearchSubmit}>
            <input style={{borderColor:"orange"}} value={search} onChange={handleSearchText}></input>
            <button style={{backgroundColor:"orange"}}>Search</button>
        </form>
    )
}

export default Filter