import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const Apps = ({ apps: appsProp }) => {
    const loaderApps = useLoaderData();
    const allApps = appsProp ?? loaderApps ?? [];
    const isStandalonePage = appsProp == null;
    const [searchQuery, setSearchQuery] = useState('');
    const [apps, setApps] = useState(allApps);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.trim() === '') {
            setApps(allApps);
        } else {
            const filteredApps = allApps.filter(app =>
                app.title.toLowerCase().includes(query)
            );
            setApps(filteredApps);
        }
    };

    return (
        <div className='px-4'>
            {isStandalonePage && (
                <div className='text-center justify-center mt-10'>
                    <h1 className='text-4xl font-bold '>Our All Applications</h1>
                    <p>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            )}

            {
                isStandalonePage && loaderApps.length ? (
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10 max-w-screen-xl mx-auto'>
                        <div className='font-semibold text-2xl'>
                            ({apps.length}) Apps Found
                        </div>
                        <div>
                            <div className='relative'>
                                <input
                                    type="search"
                                    name="Apps"
                                    id=""
                                    placeholder="Search Apps..."
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    className='border-1 rounded pl-10 pr-4 py-2 w-full sm:w-64'
                                />
                                <CiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            </div>
                        </div>
                    </div>
                ) : (<div></div>)
            }


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 bg-base-300 max-w-screen-xl mx-auto mt-10 mb-10 p-4 rounded'>
                {
                    apps.map(product => (
                        <Link
                            key={product.id}
                            to={`/apps/app/${product.id}`}
                            className="card bg-white w-full shadow-2xl hover:shadow-3xl transition-shadow"
                        >
                            <figure className="p-5">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="rounded-xl w-full h-60 sm:h-64 object-cover border-2"
                                />
                            </figure>
                            <div className="card-body items-center text-left mx-10 mb-5">
                                <h2 className="card-title mb-4">{product.title}</h2>
                                <div className='flex justify-between'>
                                    <span className='flex items-center gap-2 text-[#00D390] bg-[#def6ee] rounded-md p-2'>
                                        <FiDownload />
                                        {
                                            new Intl.NumberFormat("en-US", {
                                                notation: "compact",
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
        </div>

    );
};

export default Apps;
