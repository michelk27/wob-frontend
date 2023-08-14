import React, { useState } from 'react';
import LogoImage from '../assets/logo.svg';
import YoungManMeditatingImage from '../assets/young_man_meditating.png';
import LoginTemplate from './Template/LoginTemplate.jsx';
import PrimaryButton from "./Buttons/PrimaryButton.jsx";

const LoginPage = () => {
    const [isModelLoginOpen, setIsModelLoginOpen] = useState(false );
    return (
        <div className="bg-green_yellow_backgroung flex flex-row justify-start items-start w-1920 h-1024 p-0 box-border overflow-hidden">
            <div className="absolute flex-col p-0 box-border left-0 right-0 top-0 bottom-0 mx-auto flex justify-center items-center w-601 h-620 top-190">
                <img src={LogoImage} alt="logo" className="h-auto w-250.76 my-0" />
                <div className="text-center whitespace-pre-wrap font-bold text-3xl text-green-600 font-inter mt-6">
                    Well-Organized Businesses
                </div>
                <PrimaryButton label="Sign in" onClick={() => setIsModelLoginOpen(true)} />
            </div>
            <img
                src={YoungManMeditatingImage}
                alt="young man meditating"
                className="h-auto w-485 object-contain left-1336 top-375"
            />
            {isModelLoginOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-black">
                    {
                        isModelLoginOpen &&  <LoginTemplate onClose={() => setIsModelLoginOpen(false)} />
                    }
                </div>
            )}
        </div>
    );
};
export default LoginPage;
