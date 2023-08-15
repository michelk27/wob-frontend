import React from 'react';

const StatusPill = ({ status }) => {
    let pillClass = '';

    if (status === 'Pending') {
        pillClass = 'bg-yellow text-black';
    } else if (status === 'Scheduled') {
        pillClass = 'bg-lightGreen text-black';
    }

    return (
        <span className={`px-2 py-1 rounded-full ${pillClass}`}>
            {status}
        </span>
    );
};

export default StatusPill;
