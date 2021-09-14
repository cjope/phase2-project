import { useState } from "react"

function SignIn(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(`username is: ${username}`)
        console.log(`password is: ${password}`)
        setUsername("")
        setPassword("")
    }

    function onUserChange(e){
        setUsername(e.target.value)
    }

    function onPasswordChange(e){
        setPassword(e.target.value)
    }

 

    return(
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" value={username} onChange={onUserChange}></input>
                <br/>
                <input placeholder="password" type="password" value={password} onChange={onPasswordChange}></input>
                <br/>
                <button>Sign In</button>
            </form>


    )
}

export default SignIn