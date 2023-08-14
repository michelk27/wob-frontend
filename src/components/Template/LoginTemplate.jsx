import React from 'react';
import MainModal from "../Modals/MainModal.jsx";
import LoginForm from "../Forms/LoginForm.jsx";

function LoginTemplate(props) {

    return (
        <MainModal onClose={props.onClose}>
            <LoginForm/>
        </MainModal>

    );
}
export default LoginTemplate;
