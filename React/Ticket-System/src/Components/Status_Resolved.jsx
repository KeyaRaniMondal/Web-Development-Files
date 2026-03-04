import React from 'react';

const Status_Resolved = ({ selectedTickets, onRemove }) => {
    console.log(selectedTickets)
    return (
        <div>
            <div>
                <h1>Task Status</h1>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        {
                            selectedTickets && selectedTickets.length > 0 ? selectedTickets.map(t =>
                                <div key={t.id} className="mb-4">
                                    <h2 className="card-title">{t?.title || 'No ticket selected'}</h2>
                                    <button className="btn btn-primary btn-sm mt-2" onClick={() => onRemove(t.id)}>Complete</button>
                                </div>
                            ) : <h2 className="card-title">No tickets selected</h2>
                        }

                    </div>
                </div>
            </div>
            <div>
                <h1>Resolved Tasks</h1>
            </div>
        </div>
    );
};

export default Status_Resolved;