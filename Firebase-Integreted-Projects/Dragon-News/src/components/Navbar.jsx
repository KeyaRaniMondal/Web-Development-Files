import { Link } from 'react-router-dom'
import user from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='py-4 flex justify-between items-center'>
            <div></div>
            <div className="nav space-x-2">
                <Link to={'/'}>Home</Link>
                <Link to={'/carrer'}>Carrer</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <img src={user} alt="" />
                <button className='btn btn-neutral rounded-none'>Login</button>
            </div>
        </div>
    )
}
export default NavBar