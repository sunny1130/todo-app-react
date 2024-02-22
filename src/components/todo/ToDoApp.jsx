import { useState } from "react"

function ToDoApp(){
    return(
        <div className="ToDoApp">
            <h3>To Do Management Application</h3>
            <Login />
            {/* <Welcome /> */}
        </div>
    )
}

function Login(){

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    return(
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={(event)=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" >Login</button>
                </div>
            </div>
        </div>
    )
}

function Welcome(){
    return(
        <div className="Welcome">Welcome Page</div>
    )
}

export default ToDoApp