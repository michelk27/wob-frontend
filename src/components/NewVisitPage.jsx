import React from 'react';
import LogoImage from "../assets/logo.svg";

const NewVisitPage = () => {
    return(
        <div className="p-8">
            <div className="w-[1920px] h-[91px] shadow-md bg-white flex justify-center items-center ">
            <img src={LogoImage} alt="logo" className="h-[74px] w-[250px] my-0" />
            </div>
            <div className="flex flex-col py-2">
                <label>Company name:</label>
                <input className="rounded-lg border p-2" type="text"/>
            </div>
            <div className="flex flex-col py-2">
            <label>Type the company address:</label>
            <input className="rounded-lg border p-2" type="text"/>
            </div>
            <div className="flex flex-col py-2">
            <label>Choose a date:</label>
            <input className="rounded-lg border p-2" type="text"/>
            </div>
            <div>
                <button className="bg-primary rounded-md px-6 py-2 text-white mt-4" >Request a Service</button>
            </div>
      </div>
    )
}
export default NewVisitPage;

