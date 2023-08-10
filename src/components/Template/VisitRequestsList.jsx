import React, { useState, useEffect } from 'react';

function VisitRequestsList() {
    const [visitRequests, setVisitRequests] = useState([]);

    useEffect(() => {
        async function fetchVisitRequests() {
            try {
                const response = await fetch('http://localhost:8080/api/visit-requests');
                if (!response.ok) {
                    console.error('Failed to fetch visit requests');
                    return;
                }
                const data = await response.json();
                 setVisitRequests(data);
            } catch (error) {
                console.error('error', error);
            }
        }
        fetchVisitRequests().then(r => {});
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-6">
            <h1>My Service Requests</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border p-8 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Visit Date</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Type</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Details</th>
                </tr>
                </thead>
                <tbody>
                {visitRequests.map((request) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={request.id}>
                        <td scope="col" className="px-6 py-3">{request.date}</td>
                        <td scope="col" className="px-6 py-3">{request.type}</td>
                        <td scope="col" className="px-6 py-3">{request.status}</td>
                        <td scope="col" className="px-6 py-3"><label>view details</label></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
export default VisitRequestsList;
