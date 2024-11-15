import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-5'>
            <div>
                <img src={logo} alt="" className='w-[300px]' />
            </div>
            <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    )
}
export default Header;