import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Apps = ({ apps: appsProp }) => {
    const loaderApps = useLoaderData();
    const apps = appsProp ?? loaderApps ?? [];
    return (
        <div className='grid grid-cols-4 gap-5 bg-base-300 w-[1440px] mx-auto mt-10 mb-10'>
            {
                apps.map(product => (
                    <Link
                        key={product.id}
                        to={`/apps/app/${product.id}`}
                        className="card bg-white w-[348px] h-[435px] shadow-2xl hover:shadow-3xl transition-shadow"
                    >
                        <figure className="p-5">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-xl w-80 h-[300px] object-cover border-2"
                            />
                        </figure>
                        <div className="card-body items-center text-left mx-10 ">
                            <h2 className="card-title mb-4">{product.title}</h2>
                            <div className='flex justify-between'>
                                <span className='flex items-center gap-2 text-[#00D390] bg-[#def6ee] rounded-md p-2'>
                                    <FiDownload />
                                    {
                                        new Intl.NumberFormat("en-US",{
                                            notation:"compact",
                                        }).format(product.downloads)
                                    }
                                </span>
                                <span className='flex items-center gap-2 text-[#FF8811] bg-[#fff9e6] rounded-md p-2'>
                                    <FaStar />
                                    {product.ratingAvg}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    );
};

export default Apps;
