import React from "react";

function ViewButton(props) {
    return (
        <button className="text-primary mt-4" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default ViewButton;
