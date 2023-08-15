import React, { useState } from 'react';
import LogoImage from "../assets/logo.svg";
import {Alert, Snackbar} from "@mui/material";

const NewVisitPage = () => {
    const [companyName, setCompanyName] = useState("");
    const [addresses, setAddresses] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const API_URL_REQUEST =  "http://localhost:8080/api/visit-requests"

    const [isSnackBarOpen, setIsSnackBarOpen] = useState(false); // State for Snackbar
    const [message, setMessage] = useState(""); // State for Snackbar message

    const handleRequestVisit = async () => {
        const initialStatus = "Pending"; //  initial status
        try {
            const response = await fetch(API_URL_REQUEST, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    companyName,
                    type,
                    addresses,
                    date,
                    status: initialStatus,
                }),
            });

            if (response.ok) {
                // Request successful, you can handle it here
                console.log('Visit requested successfully');
                setMessage("Visit requested successfully");
                setIsSnackBarOpen(true);
            } else {
                // Request failed, you can handle the error here
                console.error('Failed to request visit');
                setMessage("Failed to request visit");
                setIsSnackBarOpen(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage("An error occurred while requesting the visit");
            setIsSnackBarOpen(true);
        }
    };

    return (
        <div>
            <div className="w-screen h-[91px] shadow-md bg-white flex justify-center items-center ">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0" />
            </div>
            <h1 className="text-[#0F666D] text-2xl font-bold px-8">Request a Service:</h1>
            <div className="p-8">
                <div className="flex flex-col py-2">
                    <label>Company name:</label>
                    <input
                        className="rounded-lg border p-2"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label>Type the company address:</label>
                    <input
                        className="rounded-lg border p-2"
                        type="text"
                        value={addresses}
                        onChange={(e) => setAddresses(e.target.value)}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label>Choose a date:</label>
                    <input
                        className="rounded-lg border p-2"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label>Type:</label>
                    <input
                        className="rounded-lg border p-2"
                        type="text"
                        value={type}
                        onChange={(event) => {
                            setType(event.target.value);
                        }}
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        className="bg-primary rounded-md px-6 py-2 text-white mt-4"
                        onClick={handleRequestVisit}
                    >
                        Request a Visit
                    </button>
                </div>
            </div>
    {/* Snackbar component */}
    <Snackbar open={isSnackBarOpen} autoHideDuration={4000} onClose={() => setIsSnackBarOpen(false)}>
        <Alert onClose={() => setIsSnackBarOpen(false)} severity="info">
            {message}
        </Alert>
    </Snackbar>
</div>
    );
};

export default NewVisitPage;
