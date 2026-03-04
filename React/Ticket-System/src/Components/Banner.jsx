import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around'>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">In Progress</h2>
                </div>
            </div>
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Resolved</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;