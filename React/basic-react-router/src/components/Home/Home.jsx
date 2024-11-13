import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import About from "../About/About";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
        </div>
    )
}
export default Home;