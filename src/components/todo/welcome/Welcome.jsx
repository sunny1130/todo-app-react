import { useParams } from "react-router-dom"

function Welcome(){
    const param = useParams()
    
    return(
        <div className="Welcome">Welcome {param.username}</div>
    )
}

export default Welcome