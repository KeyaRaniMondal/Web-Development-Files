import logo from '../../assets/logo.png'

const Header=()=>{
    return(
        <div className='flex flex-col justify-center items-center gap-2 py-5'>
            <h2 className='text-gray-400'></h2>
<div>
    <img src={logo} alt="" className='w-[300px]'/>
</div>
        </div>
    )
}
export default Header;