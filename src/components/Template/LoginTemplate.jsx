import React from 'react';
import MainModal from "../Modals/MainModal.jsx";

function LoginTemplate(props) {

    return (
        <MainModal onClose={props.onClose}>
            login form
        </MainModal>

    );
}
export default LoginTemplate;
