import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from '../assets/hero.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-10 bg-base-300 flex flex-col items-center justify-center text-center gap-6 px-4 py-10'>
            <h1 className='text-3xl sm:text-5xl font-bold'>
                <span className='text-[#001931]'>We Build </span><br />
                <span className='text-purple-600'>Productive </span><span className='text-[#001931]'>Apps</span>
            </h1>
            <p className='text-[#627382] max-w-3xl'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link to='https://play.google.com/store/apps?hl=en' target='_blank' className='btn btn-outline border-1 p-2  flex items-center gap-2 '><FaGooglePlay />Google Play</Link>
                <Link to='https://www.apple.com/app-store/' target='_blank' className='btn btn-outline border-1 p-2  flex items-center gap-2'><FaAppStoreIos />App Store</Link>
            </div>
            <img src={hero} alt="Hero" className='w-full max-w-2xl mt-5' />
        </div>
    );
};

export default Banner;
