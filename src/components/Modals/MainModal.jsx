import React from 'react';
import Backarrow from '../../assets/images/Backarrow.svg';

function MainModal(props) {

    return (
        <div className="px-4 fixed top-0 left-0 w-screen min-h-screen bg-black-opacity-60 z-10 flex justify-center items-center">
            <div className=" w-full max-w-[998px] rounded-[12px] shrink-0 bg-white p-[52px] z-20 relative ">
                <div className="absolute top-2 left-2 font-bold">
                    <button aria-label="back button" className="p-4 " onClick={props.onClose}>
                        <img src={Backarrow} alt="back button"/>
                    </button>
                </div>
                <div className="w-full">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
}
export default MainModal;
