import profile from '../../assets/profile.jpg'
const Header=()=>{
    return(
        <div className=' flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-3xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" width="100px" height="50px" className='rounded-full'/>
        </div>
    )
}
export default Header;
