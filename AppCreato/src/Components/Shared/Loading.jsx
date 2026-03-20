import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
                <span className="loading loading-dots loading-md"></span>
                <span className="text-sm text-gray-600">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
