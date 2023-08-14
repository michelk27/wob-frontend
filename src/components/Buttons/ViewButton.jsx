import React from "react";

function ViewButton(props) {
    return (
        <button className="text-green mt-4" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default ViewButton;
