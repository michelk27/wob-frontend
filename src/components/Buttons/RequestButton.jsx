import React from "react";
import { useNavigate } from "react-router-dom";

function RequestButton() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/newvisit");
    };
    return (
        <button className="bg-primary rounded-md px-6 py-2 text-white mt-4" onClick={handleButtonClick}>Request a Service</button>
    );
}
export default RequestButton;
