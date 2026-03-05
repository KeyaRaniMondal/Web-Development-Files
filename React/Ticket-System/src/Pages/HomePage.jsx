import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import TicketCard from '../Components/TicketCard';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner/>
            {/* <Suspense> */}
                <TicketCard className='home' />
            {/* </Suspense> */}
            <Footer/>

        </>
    );
};

export default HomePage;