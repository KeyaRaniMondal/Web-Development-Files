import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const TicketCard = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        const fetchTickets = async () => {
            const res = await fetch('/tickets.json')
            const data = await res.json()
            setTickets(data)

        };
        fetchTickets()
    }, [])
    console.log(tickets)
    // fetch('../../public/tickets.json')
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    return (
        <div className='flex justify-between'>
            <div>
                <h1>Customer Tickets</h1>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        tickets.map(tick => (
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <div className="card-body">
                                    <span className='flex justify-between'>
                                        <h2 className="card-title">{tick.title}</h2>
                                        <button className={`btn btn-sm rounded-full ${
                                                (() => {
                                                    const s = tick.status.toLowerCase();
                                                    if (s === 'open') return 'btn-success';
                                                    if (s === 'in progress' || s === 'in-progress') return 'btn-warning';
                                                    return '';
                                                })()
                                            }`}>
                                            <GoDotFill />{tick.status}
                                        </button>
                                    </span>

                                    <p>{tick.description}</p>
                                    <div className='flex justify-around'>
                                        <div className='flex gap-3'>
                                            <p>{tick.id}</p>
                                            <p>{tick.priority}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <p>{tick.customer}</p>
                                            <p>{tick.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='grid grid-rows-2'>
                <div>
                    <h1>Task Status</h1>
                </div>
                <div>
                    <h1>Resolved Tasks</h1>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;