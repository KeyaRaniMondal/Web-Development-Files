import React from 'react';
import error404 from '../assets/error-404.png'
const Error = () => {
    return (
        <div className="max-w-4xl mx-auto  bg-base-300 p-8 rounded-xl justify-center items-center text-center">
            <img src={error404} alt="App not found" className='w-[750px] h-[500px] object-cover' />
            <h2 className="text-5xl font-bold my-5">OPPS!! Page not found</h2>
            <p className="mt-2 text-gray-600">The page you are looking for is not available.</p>
            <button className="btn btn-outline btn-primary bg-gradient-to-r from-purple-600 to-purple-400 text-white gap-2 py-2 px-4 my-5 ">
                Go Back!
            </button>
        </div>
    );
};

export default Error;