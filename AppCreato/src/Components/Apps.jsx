import React from 'react';

const Apps = ({ apps }) => {
    console.log(apps);
    return (
        <div>
            {
                apps.map(product => (
                    <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Apps;