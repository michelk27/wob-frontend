import React from 'react';
import LogoImage from "../assets/logo.svg";
import TableTemplate from "./Template/TableTemplate.jsx";

const CustomerPage = () => {
    return(
        <div>
            <div className="w-[1920px] h-[91px] shadow-md bg-white flex justify-center items-center ">
                <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0" />
            </div>
            <div className="w-[1672px] h-[501px] mx-auto mt-10 flex justify-center items-center">
                <TableTemplate />
            </div>
        </div>
    )
}


export default CustomerPage;