import Header from "../../components/Header/Header"
import LatestNews from "../../components/latestNews"
import NavBar from "../../components/Navbar"

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <Header>
                <Header></Header>
            </Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            <nav className="w-11/12 mx-auto">
                <NavBar></NavBar>
            </nav>
        </div>
    )
}
export default HomeLayout