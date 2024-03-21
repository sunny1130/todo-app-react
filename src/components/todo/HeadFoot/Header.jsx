import { Link } from "react-router-dom"
import { useAuth } from "../auth/Auth"

function ToDoHeader(){
    const auth = useAuth()
    function logout(){
        auth.setisAuthenticated(false)
    }
    const headerStyle = {
        backgroundColor:'rgb(191 208 219)'
    };
    const navItemStyle={
        backgroundColor:'rgb(187 187 203)' 
    };
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2" style={headerStyle}>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item mb-0 h1 active fs-5" style={navItemStyle}>
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            {
                                auth.isAuthenticated && 
                            <li className="nav-item mb-0 h1 fs-5"  style={navItemStyle}>
                                <Link className="nav-link" to="/welcome/a">Todos</Link>
                            </li> 
                            }
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                       {
                        !auth.isAuthenticated && 
                        <li className="nav-item mb-0 h1 fs-5"  style={navItemStyle}>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li> 
                        }
                       {
                        auth.isAuthenticated && 
                        <li className="nav-item mb-0 h1  fs-5" style={navItemStyle}>
                            <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                        </li> 
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

export default ToDoHeader