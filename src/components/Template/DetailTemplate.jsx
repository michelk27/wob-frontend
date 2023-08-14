import React from 'react';
import MainModal from "../Modals/MainModal.jsx";

function DetailTemplate(props) {
    const { selectedRequest } = props;
    return(
        <MainModal onClose={props.onClose}>
            {selectedRequest && (
                <div>
                    <h2 className="flex flex-col items-center justify-center h-full">Request Details</h2>
                    <p>Visit Date: {selectedRequest.date}</p>
                    <p>Address: {selectedRequest.addresses}</p>
                    <p>Status: {selectedRequest.status}</p>
                    <p>Company: {selectedRequest.companyName}</p>
                    <p>Type: {selectedRequest.type}</p>
                </div>
            )}
        </MainModal>
    )
}
export default DetailTemplate;
