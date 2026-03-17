import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Apps = ({ apps }) => {
    // console.log(apps);
    return (
        <div className='grid grid-cols-4 gap-5 bg-base-300 w-[1440px] mx-auto mt-10 mb-10'>
            {
                apps.map(product => (
                    <div key={product.id} className="card bg-white w-[348px] h-[435px] shadow-2xl">
                        <figure className="p-5">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl w-80 h-[300px] object-cover border-2" />
                        </figure>
                        <div className="card-body items-center text-left mx-10 ">
                            <h2 className="card-title mb-4">{product.title}</h2>
                            <div className='flex justify-between'>
                                <button className='flex items-center gap-2 text-[#00D390] bg-[#def6ee] rounded-md p-2'><FiDownload />{product.downloads}</button>
                                <button className='flex items-center gap-2 text-[#FF8811] bg-[#fff9e6] rounded-md p-2'><FaStar />{product.ratingAvg}</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Apps;