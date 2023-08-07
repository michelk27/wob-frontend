import React from 'react';
import MainModal from "../Modals/MainModal.jsx";
import PrimaryButton from "../Buttons/PrimaryButton.jsx";

function LoginTemplate(props) {

    return (
        <MainModal onClose={props.onClose}>
            <div className="w-[416px] h-[74px] flex justify-center items-center mx-auto">
                <PrimaryButton label="Sign in" onClick={props.open}  />
            </div>
        </MainModal>

    );
}
export default LoginTemplate;
