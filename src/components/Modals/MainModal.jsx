import React from 'react';

function MainModal(props) {

    return (
        <div className="px-4 fixed top-0 left-0 w-screen min-h-screen bg-black-opacity-60 z-10 flex justify-center items-center">
            <div className=" w-full max-w-[998px] rounded-[12px] shrink-0 bg-white p-4 z-20 relative ">
                <div className="absolute top-2 right-2 font-bold">
                    <button className="text-right font-bold " onClick={props.onClose}>X</button>
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
