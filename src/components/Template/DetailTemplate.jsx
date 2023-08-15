import React from 'react';
import MainModal from "../Modals/MainModal.jsx";
import VisitDateImage from '../../assets/images/Date.svg';
import AddressImage from '../../assets/images/Address.svg';
import StatusImage from '../../assets/images/Status.svg';
import CompanyImage from '../../assets/images/Company.svg';
import TypeImage from '../../assets/images/Type.svg';

function DetailTemplate(props) {
    const { selectedRequest } = props;
    return (
        <MainModal onClose={props.onClose}>
            {selectedRequest && (
                <div>
                    <h2 className="flex flex-col items-center justify-center h-full text-[#0F666D] text-2xl-normal font-bold">Request Details</h2>
                    <p>
                        <img src={VisitDateImage} alt="Visit Date" className="inline-block mr-2" />
                        Visit Date: {selectedRequest.date}
                    </p>
                    <p>
                        <img src={TypeImage} alt="Type" className="inline-block mr-2" />
                        Type: {selectedRequest.type}
                    </p>
                    <p>
                        <img src={StatusImage} alt="Status" className="inline-block mr-2" />
                        Status: {selectedRequest.status}
                    </p>
                    <p>
                        <img src={CompanyImage} alt="Company" className="inline-block mr-2" />
                        Company: {selectedRequest.companyName}
                    </p>
                    <p>
                        <img src={AddressImage} alt="Address" className="inline-block mr-2" />
                        Address: {selectedRequest.addresses}
                    </p>
                </div>
            )}
        </MainModal>
    )
}

export default DetailTemplate;
