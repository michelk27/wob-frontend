import React from 'react';
import MainModal from "../Modals/MainModal.jsx";

function DetailTemplate(props) {
    return(
        <MainModal onClose={props.onClose}>
            hello
        </MainModal>
    )
}
export default DetailTemplate;
