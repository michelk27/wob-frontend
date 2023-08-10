import React from 'react';
import LogoImage from "../assets/logo.svg";
import VisitRequestsList from "./Template/VisitRequestsList.jsx";
import PrimaryButton from "./Buttons/PrimaryButton.jsx";
import RequestButton from "./Buttons/RequestButton.jsx";

const CustomerPage = () => {
    return(
        <div>
            <div className="w-[1920px] h-[91px] px-892 py-14 shadow-md bg-white flex justify-center items-center ">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0" />
            </div>
            <div className="w-full flex justify-end px-6 mt-4">
                <RequestButton /> {/* Render the RequestButton component */}
            </div>
            <div>
                <VisitRequestsList />
            </div>
        </div>
    )
}
export default CustomerPage;
