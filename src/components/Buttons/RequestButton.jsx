import React from "react";
import { useNavigate } from "react-router-dom";
import IconImage from "../../assets/images/Icon.svg";

function RequestButton() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/newvisit");
    };
    return (
        <button className="bg-primary rounded-md px-6 py-2 text-white mt-4" onClick={handleButtonClick}>
            <img src={IconImage} alt="Icon" className="inline-block mr-2" />
            Request a Service
        </button>
    );
}
export default RequestButton;
