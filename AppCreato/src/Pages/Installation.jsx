import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { getAppsId, removeAppsId } from '../Components/localStorage';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Installation = () => {
    const navigate = useNavigate();

    const details = useLoaderData()

    const appsId = getAppsId();
    const [installedApps, setInstalledApps] = useState(
        details.filter(app => appsId.includes(app.id))
    );

    const handleUninstall = (id) => {
        removeAppsId(id);
        setInstalledApps((prev) => prev.filter(app => app.id !== id));
        toast.error('The app has been uninstalled successfully!');
        navigate('/apps');
    }
    return (
        <div className='bg-[#f7f8f9] text-center justify-center py-10'>
            <h1 className='font-bold text-4xl '>Your Installed Apps</h1>
            <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            {
                installedApps.length > 0 ? (
                    <div className='w-[1440px] mx-auto mt-10 gap-5'>
                        {installedApps.map((app) => (

                            <div key={app.id} className='card flex justify-between items-center bg-[#FFFFFF] h-[112px] shadow-xl p-4  mb-4'>
                                <div className='flex items-center gap-5'>
                                    <img src={app.image} alt={app.title} className='w-[80px] h-[80px]' />
                                    <div className='flex flex-col'>
                                        <h2>{app.title}</h2>
                                        <div className='flex justify-between'>
                                            <span className='flex items-center gap-2 text-[#00D390] rounded-md p-2'>
                                                <FiDownload />
                                                {
                                                    new Intl.NumberFormat("en-US", {
                                                        notation: "compact",
                                                    }).format(app.downloads)
                                                }
                                            </span>
                                            <span className='flex items-center gap-2 text-[#FF8811] rounded-md p-2'>
                                                <FaStar />
                                                {app.ratingAvg}
                                            </span>
                                            <span className='text-gray-400 p-2'>{app.size} MB</span>
                                        </div>
                                    </div>


                                </div>

                                <button onClick={() => handleUninstall(app.id)}
                                    className='btn bg-[#0ea978] h-10  text-white p-2 rounded'>Uninstall</button>
                            </div>
                        ))}
                    </div>
                ) :
                    <p>No installed apps found.</p>
            }
        </div>
    );
};

export default Installation;
