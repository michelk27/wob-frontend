import React from 'react';
import LogoImage from "../assets/logo.svg";
import VisitRequestsList from "./Template/VisitRequestsList.jsx";
import RequestButton from "./Buttons/RequestButton.jsx";
import IconImage from "../assets/images/Icon.svg";

const CustomerPage = () => {
    return(
        <div>
            <div className="w-screen h-[91px] px-892 py-14 shadow-md bg-white flex justify-center items-center ">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0 " />
            </div>
            <div className="w-full flex justify-end px-6 mt-4">
                <RequestButton />
            </div>
            <div>
                <VisitRequestsList />
            </div>
        </div>
    )
}
export default CustomerPage;
