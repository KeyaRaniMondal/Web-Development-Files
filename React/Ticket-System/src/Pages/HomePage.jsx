import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import TicketCard from '../Components/TicketCard';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            {/* <Suspense> */}
                <TicketCard />
            {/* </Suspense> */}

        </>
    );
};

export default HomePage;