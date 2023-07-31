import React, { useState } from 'react';
import LogoImage from '../assets/logo.svg';
import YoungManMeditatingImage from '../assets/young_man_meditating.png';
import Authentication5 from '../components/Authentication5/Authentication5.jsx';
import Frame4Image from '../assets/images/Sign In.svg';
import SignUp from '../components/Access/SignUp.jsx';

const Frame8 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignInClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSignUpClick = () => {
        setShowSignUp(true);
        setIsModalOpen(true);
    };

    const handleSignIn = () => {
        // Perform the authentication logic
        setIsModalOpen(false); // After successful authentication
    };

    const handleSignUp = () => {
        // You can handle the SignUp logic here, e.g., send the data to the server
        setShowSignUp(false);
        setIsModalOpen(false);
    };

    return (
        <div className="bg-green_yellow_backgroung flex flex-row justify-start items-start w-1920 h-1024 p-0 box-border overflow-hidden">
            <div className="absolute flex flex-col justify-start items-center p-0 box-border left-0 right-0 top-0 bottom-0 mx-auto" style={{ width: '601px', height: '620px', top: '190px' }}>
                <img src={LogoImage} alt="logo" className="h-auto w-250.76 my-0" />
                <div className="text-center whitespace-pre-wrap font-bold text-3xl text-green-600 font-inter mt-6">
                    Well-Organized Businesses
                </div>
                <span onClick={handleSignInClick} className="cursor-pointer">
                    <img src={Frame4Image} alt="Sign in" className="h-auto w-416 mt-6" />
                </span>
                <div className="text-center whitespace-pre-wrap text-lg text-gray-500 font-poppins font-medium">
                    You don’t have an account?{' '}
                    {!showSignUp ? (
                        <span onClick={handleSignUpClick} className="underline cursor-pointer text-green-500">
                            Sign Up
                        </span>
                    ) : (
                        <span className="text-green-500">Signed In</span>
                    )}
                </div>
            </div>
            <img
                src={YoungManMeditatingImage}
                alt="young man meditating"
                className="h-auto w-485 object-contain left-1336 top-375"
            />
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-black">
                    {showSignUp ? (
                        <SignUp onSignUp={handleSignUp} onClose={closeModal} />
                    ) : (
                        <Authentication5 onSignIn={handleSignIn} onClose={closeModal} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Frame8;
