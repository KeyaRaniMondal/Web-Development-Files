import Home from "../Home/Home";
import About from "../About/About";
import { Link } from "react-router-dom";
const Header=()=>{
    return(
        <div>
            <h2>NavBar</h2>
            <nav>
                {/* Link prevents reloading pages where <a></a> reloads page */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/user">User</Link>
            </nav>
        </div>
    )
}
export default Header;