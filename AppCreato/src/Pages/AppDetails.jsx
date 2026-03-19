import React from 'react';
import { useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { VscThumbsupFilled } from 'react-icons/vsc';
import Chart from '../Components/Chart';
import appError from '../assets/App-Error.png'
import { addAppsId } from '../Components/localStorage';
import toast from 'react-hot-toast';

const AppDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    if (!details) {
        return (
            <div className="max-w-4xl mx-auto mt-10 bg-base-300 p-8 rounded-xl justify-center items-center text-center">
                <img src={appError} alt="App not found" className='w-[750px] h-[500px] object-cover' />
                <h2 className="text-5xl font-bold my-5">OPPS!! App not found</h2>
                <p className="mt-2 text-gray-600">The App you are requesting is not found on our system.  please try another apps</p>
                <button className="btn btn-outline btn-primary bg-gradient-to-r from-purple-600 to-purple-400 text-white gap-2 py-2 px-4 my-5 ">
                    Go Back!
                </button>
            </div>
        );
    }


    const handleInstall=(id)=>{
        addAppsId(id);
        toast.success('Successfully Added App for Installation!')
    }

    return (
        <div className='w-[1440px] bg-base-300 mx-auto mt-10'>
            <div className='flex justify-left gap-10'>
                <div>
                    <img src={details.image} alt={details.title} className='w-[350px] h-[350px]' />
                </div>
                <div>
                    <div>
                        <h1 className='text-[#001931] font-bold text-3xl'>{details.title}</h1>
                        <p>developed by {details.companyName}</p>
                    </div>
                    <div className='flex justify-between gap-5 my-6'>
                        <div>
                            <FiDownload className='text-[#00D390] font-bold text-4xl' /><span>Downloads</span><h1 className='font-bold text-4xl'>
                                {new Intl.NumberFormat('en-US', {
                                    notation: 'compact'
                                }).format(details.downloads)}</h1>
                        </div>
                        <div>
                            <FaStar className='text-[#FF8811] font-bold text-4xl' /><span>Average Ratings</span><h1 className='font-bold text-4xl'>{details.ratingAvg}</h1>
                        </div>
                        <div>
                            <VscThumbsupFilled className='text-[#74129b] font-bold text-4xl' /><span>Total Reviews</span><h1 className='font-bold text-4xl'>  {new Intl.NumberFormat('en-US', {
                                notation: 'compact'
                            }).format(details.reviews)}</h1>
                        </div>

                    </div>
                    <button onClick={() => handleInstall(details.id)} className='btn bg-[#0ea978] text-white p-2 rounded'>Install Now ({details.size} MB)</button>
                </div>
            </div>

            <Chart details={details} />
            <div className='mt-10'>
                <h1 className='text-3xl font-semibold'>Description</h1>
                <p className='text-[#627382]'>{details.description}</p>
            </div>

        </div>
    );
};

export default AppDetails;
