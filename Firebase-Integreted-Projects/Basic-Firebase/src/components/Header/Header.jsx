import { NavLink } from "react-router-dom"

const Header=()=>{
    return(
        <div>
            <h1>This is home</h1>
           <NavLink className={{'marginRight':'20px'}} to='/'>Home</NavLink>
           <NavLink to='/login'>Login</NavLink>
        </div>
    )
}
export default Header