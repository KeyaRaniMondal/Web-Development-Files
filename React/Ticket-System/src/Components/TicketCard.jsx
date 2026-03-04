import React, { use, useEffect, useState } from 'react';

const TicketCard = () => {
const [tickets,setTickets]=useState([])
    useEffect(()=>{
const fetchTickets=async()=>{
    const res=await fetch('/tickets.json')
    const data=await res.json()
    setTickets(data)

};
fetchTickets()
    },[])
console.log(tickets)
    // fetch('../../public/tickets.json')
    // .then(res=>res.json())
    // .then(data=>console.log(data))


    createdAt
: 
// "2026-03-01T09:15:00Z"
// customer
// : 
// "Acme Corp"
// description
// : 
// "User unable to log in despite correct credentials. Error 401 returned."
// id
// : 
// "TCK-001"
// priority
// : 
// "High"
// status
// : 
// "Open"
// title
// : 
// "Logi

    return (
        <div className='flex justify-between'>
            <div>
                <h1>Customer Tickets</h1>
                <div>
                    {
                        tickets.map(tick=>(
                            <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{tick.title}</h2>
    <button className='btn-rounded-full'>{tick.status}</button>
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