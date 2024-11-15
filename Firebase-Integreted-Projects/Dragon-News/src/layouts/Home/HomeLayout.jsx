import Header from "../../components/Header/Header"
import LatestNews from "../../components/latestNews"
import LeftNavBar from "../../components/layoutComponents/leftNabar"
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
            <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
                <aside className="left col-span-3">
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className="col-span-6">Main content</section>
                <aside className="col-span-3">Right Navbar</aside>
            </main>
        </div>
    )
}
export default HomeLayout