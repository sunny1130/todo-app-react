
import Login from "./auth/Login"
import Welcome from "./welcome/Welcome"
import Error from "./Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToDoLogout from "./auth/Logout"
import ToDoFooter from "./HeadFoot/Footer"
import ToDoHeader from "./HeadFoot/Header"
import Home from "./home/home"
import Auth,{Authenticated} from "./auth/Auth"

function ToDoApp(){
    return(
        <div className="ToDoApp">
            <h3>To Do Management Application</h3>
            <Auth>
                <BrowserRouter>
                    <ToDoHeader />
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/welcome/:username' element={<Authenticated><Welcome /></Authenticated>}/>
                        <Route path='/logout' element={<Authenticated><ToDoLogout/></Authenticated>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='*' element={<Error />}/>
                    </Routes>
                    <ToDoFooter />
                </BrowserRouter>
            </Auth>
        </div>
    )
}
export default ToDoApp