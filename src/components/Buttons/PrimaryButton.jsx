import React from 'react';

function PrimaryButton(props) {
    return (
        <button
            className="bg-primary rounded-md px-[76px] py-2 text-white mt-4"
            onClick={props.onClick}
        >{
            props.label
        }
        </button>
    )
}
export default PrimaryButton;
