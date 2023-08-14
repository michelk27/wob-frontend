import React, { useState, useEffect } from 'react';
import DetailTemplate from "./DetailTemplate.jsx";
import ViewButton from "../Buttons/ViewButton.jsx";

function VisitRequestsList() {
    const [visitRequests, setVisitRequests] = useState([]);
    const [isModelDetailOpen, setIsModelDetailOpen] = useState(false );


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

        fetchVisitRequests().then(r =>{} ); // Call the async function here
    }, []);

    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-6">
            <h1 className=" text-[#0F666D] font-bold ">My Service Requests</h1>
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
                        <td scope="col" className="px-6 py-3"><ViewButton label="view details" onClick={() => setIsModelDetailOpen(true)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
            {isModelDetailOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-black">
                    {
                        isModelDetailOpen &&  <DetailTemplate onClose={() => setIsModelDetailOpen(false)} />
                    }
                </div>
            )}
        </>
    );
}
export default VisitRequestsList;
