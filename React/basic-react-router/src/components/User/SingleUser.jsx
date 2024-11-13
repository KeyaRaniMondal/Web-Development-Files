import { Link } from "react-router-dom";
const SingleUser=({user})=>{
    const {id,name,email}=user;
    const userStyle={
        border:'2px solid blue',
        padding:'10px',
        borderRadius:'20px',
        margin:'20px'
    }
    return(
        <div style={userStyle}>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
           <Link to={`/user/${id}`}>Details:</Link>
        </div>
    )
}
export default SingleUser;