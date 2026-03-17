import React from 'react';
import logo from '../../assets/logo.png';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#001931] text-white p-4 mt-10">

            <div className='flex justify-between mx-auto text-white mb-2'>
                <div className="navbar-start">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <span className="font-bold text-lg">HERO.IO</span>

                    </div>
                </div>
                <div className='flex gap-1'>
                    <RiTwitterXLine />
                    <FaLinkedin />
                    <FaFacebook />
                </div>
            </div>
            <hr />

            <p className='text-center mx-auto mt-2'>Copyright © {new Date().getFullYear()} - All right reserved </p>

        </footer>
    );
};

export default Footer;