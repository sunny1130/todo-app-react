import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./Auth"
function Login(){

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [successLogin,setSuccessLogin] = useState(false)
    const [unsuccessLogin,setUnSuccessLogin] = useState(false)
    const navigate = useNavigate()
    const auth = useAuth()

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleLogin(){
        //Check Login Credentials and Perform Next Steps
        //TO-DO
        //Hard Coding for now
        if(username === 'a' && password === 'a'){
            setSuccessLogin(true)
            setUnSuccessLogin(false)
            auth.setisAuthenticated(true)
            navigate(`/welcome/${username}`)
        }else{
            setSuccessLogin(false)
            setUnSuccessLogin(true)
            auth.setisAuthenticated(false)
        }
    }

    function SuccessfullLogin(){
        if(successLogin){
            return <div className="SuccessLogin">Authenticated Successfully</div>
        }
        return null
    }

    function UnSuccessfullLogin(){
        if(unsuccessLogin){
            return <div className="ErrorLogin">Authentication Failed</div>
        }
        return null
    }

    return(
        <div className="Login">
            <div className="LoginForm">
                <SuccessfullLogin/>
                <UnSuccessfullLogin/>
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={(event)=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login