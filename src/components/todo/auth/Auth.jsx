import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

function Auth({children}) {
    const [isAuthenticated,setisAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function Authenticated({children}){
    console.log(useAuth().isAuthenticated)
    if(useAuth().isAuthenticated)
        return children
    return <Navigate to="/" />
}

export default Auth