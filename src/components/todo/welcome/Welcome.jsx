import { useParams } from "react-router-dom"

function Welcome(){
    const param = useParams(); 
    const todaysdate = new Date();
    const todoList = [  {id:1, description: "Learn AWS", done:false, targetDate:todaysdate},
                        {id:2, description: "Learn Java", done:false, targetDate:todaysdate},
                        {id:3, description: "Learn Python", done:false, targetDate:todaysdate}
                    ]
    
    return(
        <div>
            <div className="container">Welcome {param.username}</div>
            {
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map(
                            eachtodo => (
                                <tr key={eachtodo.id}>
                                    <td>{eachtodo.id}</td>
                                    <td>{eachtodo.description}</td>
                                    <td>{eachtodo.done.toString()}</td>
                                    <td>{eachtodo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Welcome