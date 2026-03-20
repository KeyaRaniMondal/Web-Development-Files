import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Shared/Footer';
import Loading from '../Components/Shared/Loading';

const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div>
            <Navbar/>
            {isLoading && <Loading />}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
