import React from 'react';

const StatusPill = ({ status }) => {
    let pillClass = '';

    if (status === 'Pending') {
        pillClass = 'bg-yellow text-black';
    } else if (status === 'Scheduled') {
        pillClass = 'bg-lightGreen text-black';
    }

    return (
        <div className={`px-4 py-1 rounded-full max-w-[230px] w-full text-center mx-auto ${pillClass}`}>
            {status}
        </div>
    );
};

export default StatusPill;
