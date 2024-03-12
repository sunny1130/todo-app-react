import { Link } from "react-router-dom"
import { useAuth } from "../auth/Auth"

function ToDoHeader(){
    const auth = useAuth()
    function logout(){
        auth.setisAuthenticated(false)
    }
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/home">Home</Link></li>
                           {auth.isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/a">Todos</Link></li> }
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                       {!auth.isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li> }
                       {auth.isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li> }
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default ToDoHeader