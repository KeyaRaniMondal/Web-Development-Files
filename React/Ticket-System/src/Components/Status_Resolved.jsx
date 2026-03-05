import React from 'react';

const Status_Resolved = ({ selectedTickets, onRemove, removed }) => {
    console.log(removed)
    return (
        <div>
            <div>
                <h1>Task Status</h1>
                <div className="card w-[358px] h-[113px] bg-base-100 shadow-sm">
                    <div className="card-body">
                        {
                            selectedTickets && selectedTickets.length > 0 ? selectedTickets.map(t =>
                                <div key={t.id} className="mb-4">
                                    <h2 className="card-title">{t?.title || 'No ticket selected'}</h2>
                                    <button className="btn bg-[#02A53B] w-full mt-2" onClick={() => onRemove(t)}>Complete</button>
                                </div>
                            ) : <h2>Select a ticket to add to Task Status</h2>
                        }

                    </div>
                </div>
            </div>
            <div>
                <h1>Resolved Tasks</h1>
                <div>
                    {
                        removed && removed.length > 0 ? (
                            removed.map(r => (
                                <div key={r.id} className="mb-2">
                                    <h2 className="text-lg font-medium p-3 bg-[#E0E7FF]">{r.title}</h2>
                                </div>
                            ))
                        ) : (
                            <p>No resolved tasks yet</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Status_Resolved;