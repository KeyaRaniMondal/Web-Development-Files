import { useLoaderData } from "react-router-dom";
import SingleUser from "./singleUser";


const User=()=>{
    const single=useLoaderData();
    console.log(single)
    return(
        <div>
            <h2>Users:{single.length}</h2>
            <div className="displaying">
                {
                    single.map(user=><SingleUser key={single.id} user={user}></SingleUser>)
                }
            </div>
        </div>
    )
}
export default User;