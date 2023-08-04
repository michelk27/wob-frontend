import React from 'react';

function MainModal(props) {

    return (
        <div className="fixed top-0 left-0 w-screen min-h-screen bg-black-opacity-60 z-10 flex justify-center items-center">
            <div className="w-[998px] rounded-lg bg-white p-4 z-20 ">
                <div className="w-full flex justify-end items-center ">
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
