import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [inProgressCount, setInProgressCount] = useState(0);
    const [resolvedCount, setResolvedCount] = useState(0);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('/tickets.json');
                const tickets = await response.json();
                
                setInProgressCount(
                    tickets.filter(t => t.status === 'In Progress').length
                );
                setResolvedCount(
                    tickets.filter(t => t.status === 'Resolved').length
                );
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div className="flex justify-center gap-10 px-10 py-8">
            
            {/* In Progress Card */}
            <div className="relative w-[420px] h-[180px] rounded-2xl 
                            bg-gradient-to-br from-purple-500 via-purple-500 to-indigo-600 
                            text-white flex flex-col justify-center items-center 
                            overflow-hidden shadow-lg">
                
                {/* Wave Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white_0%,_transparent_60%)]"></div>

                <div className="relative z-10 text-center">
                    <p className="text-xl font-medium tracking-wide opacity-90">
                        In-Progress
                    </p>
                    <p className="text-6xl font-semibold mt-2">
                        {inProgressCount}
                    </p>
                </div>
            </div>

            {/* Resolved Card */}
            <div className="relative w-[420px] h-[180px] rounded-2xl 
                            bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 
                            text-white flex flex-col justify-center items-center 
                            overflow-hidden shadow-lg">
                
                {/* Wave Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white_0%,_transparent_60%)]"></div>

                <div className="relative z-10 text-center">
                    <p className="text-xl font-medium tracking-wide opacity-90">
                        Resolved
                    </p>
                    <p className="text-6xl font-semibold mt-2">
                        {resolvedCount}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Banner;