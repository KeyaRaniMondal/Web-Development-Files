import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Status_Resolved from './Status_Resolved';

const TicketCard = () => {
    const [tickets, setTickets] = useState([])
    const [selectedTickets, setSelectedTickets] = useState([])
    useEffect(() => {
        const fetchTickets = async () => {
            const res = await fetch('/tickets.json')
            const data = await res.json()
            setTickets(data)

        };
        fetchTickets()
    }, [])
    // fetch('../../public/tickets.json')
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    //For adding tickets to task status and removing from there
    const handleSelectedTicket = (ticket) => {
        setSelectedTickets(prev => {
            const alreadySelected = prev.find(t => t.id === ticket.id);

            if (alreadySelected) {
                alert(`Ticket ${ticket.id} removed from selection`);
                return prev.filter(t => t.id !== ticket.id);
            } else {
                alert(`Ticket ${ticket.id} added to selection`);
                return [...prev, ticket];
            }
        });
    };

    const handleRemoveTicket = (id) => {
        setSelectedTickets(prev => prev.filter(t => t.id !== id));
    };


    return (
        <div className='flex justify-between'>
            <div>
                <h1>Customer Tickets</h1>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        tickets.map(tick => (
                            <div key={tick.id} className={`card bg-base-100 w-96 shadow-sm cursor-pointer ${selectedTickets.find(t => t.id === tick.id) ? 'ring-2 ring-blue-400' : ''}`} onClick={() => handleSelectedTicket(tick)}>
                                <div className="card-body">
                                    <span className='flex justify-between'>
                                        <h2 className="card-title">{tick.title}</h2>
                                        <button className={`btn btn-sm rounded-full ${(() => {
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
                <Status_Resolved selectedTickets={selectedTickets} onRemove={handleRemoveTicket} />
            </div>
        </div>
    );
};

export default TicketCard;