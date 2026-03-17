import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from '../assets/hero.png'
const Banner = () => {
    return (
        <div className='max-w-[1440 px] h-[344 px] mx-auto mt-10 bg-base-300 flex flex-col items-center justify-center text-center gap-6'>
            <h1 className='text-5xl font-bold'>
                <span className='text-[#001931]'>We Build </span><br />
                <span className='text-purple-600'>Productive </span><span className='text-[#001931]'>Apps</span>
            </h1>
            <p className='text-[#627382]'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex items-center justify-center gap-5'>
                <button className='btn btn-outline border-1 p-2  flex items-center gap-2 '><FaGooglePlay />Google Play</button>
                <button className='btn btn-outline border-1 p-2  flex items-center gap-2'><FaAppStoreIos />App Store</button>
            </div>
            <img src={hero} alt="Hero" className='w-[650px] mt-5' />
        </div>
    );
};

export default Banner;
