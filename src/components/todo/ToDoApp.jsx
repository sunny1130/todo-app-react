
import Login from "./login/Login"
import Welcome from "./welcome/Welcome"
import Error from "./Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function ToDoApp(){
    return(
        <div className="ToDoApp">
            <h3>To Do Management Application</h3>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/welcome/:username' element={<Welcome />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default ToDoApp