import React from 'react';
import LogoImage from "../assets/logo.svg";
import VisitRequestsList from "./Template/VisitRequestsList.jsx";

const CustomerPage = () => {
    return(
        <div>
            <div className="w-screen h-[91px] shadow-md bg-white flex justify-center items-center mb-6">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0 " />
            </div>
            <div>
                <VisitRequestsList />
            </div>
        </div>
    )
}
export default CustomerPage;
