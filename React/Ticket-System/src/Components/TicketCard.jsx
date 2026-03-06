import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import Status_Resolved from './Status_Resolved';
import { Bounce, toast } from 'react-toastify';

const TicketCard = () => {
    const [tickets, setTickets] = useState([])
    const [selectedTickets, setSelectedTickets] = useState([])
    const [removed, setRemoved] = useState([])
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
    // toast options
    const toastOpts = (id) => ({
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        toastId: id,
    });

    const handleSelectedTicket = (ticket) => {
        // determine current selection which toast to show
        const alreadySelected = selectedTickets.find(t => t.id === ticket.id);

        setSelectedTickets(prev => {
            if (alreadySelected) {
                return prev.filter(t => t.id !== ticket.id);
            } else {
                return [...prev, ticket];
            }
        });

        // show toast based on whether the ticket was added or removed from selection
        if (alreadySelected) {
            toast.info(`Ticket ${ticket.id} resolved tasks`, toastOpts(ticket.id + "-removed"));
        } else {
            toast.info(`Ticket ${ticket.id} added to Task Status`, toastOpts(ticket.id + "-added"));
        }
    };

    const handleRemoveTicket = (ticket) => {
        setSelectedTickets(prev => prev.filter(t => t.id !== ticket.id));
        setRemoved(prev => [...prev, ticket]);

        // show a toast when a ticket is completed
        toast.success(`Ticket ${ticket.id} marked as complete`, toastOpts(ticket.id + "-completed"));
    };


    return (
        <div className='home flex flex-col md:flex-row justify-between px-4 md:px-0 py-6'>
            <div className="mb-4">
                <h1 className="text-xl font-semibold text-center md:text-left">Customer Tickets</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {
                        tickets.map(tick => (
                            <div key={tick.id} className={`card bg-base-100 w-full sm:w-96 shadow-sm cursor-pointer ${selectedTickets.find(t => t.id === tick.id) ? 'ring-2 ring-blue-400' : ''}`} onClick={() => handleSelectedTicket(tick)}>
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
            <div className='grid grid-rows-2 mt-6 md:mt-0'>
                <Status_Resolved selectedTickets={selectedTickets} onRemove={handleRemoveTicket} removed={removed} />
            </div>
        </div>
    );
};

export default TicketCard;