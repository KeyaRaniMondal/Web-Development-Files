import React from 'react';
import { useLoaderData } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { VscThumbsupFilled } from 'react-icons/vsc';
import Chart from '../Components/Chart';

const AppDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    // if (!details) {
    //     return (
    //         <div className="max-w-4xl mx-auto mt-10 bg-base-200 p-8 rounded-xl">
    //             <h2 className="text-2xl font-semibold">App not found</h2>
    //             <p className="mt-2 text-gray-600">The app you are looking for does not exist.</p>
    //         </div>
    //     );
    // }

    return (
        <div className='w-[1440px] mx-auto mt-10'>
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
                    <button className='btn bg-[#0ea978] text-white p-2 rounded'>Install Now ({details.size} MB)</button>
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
