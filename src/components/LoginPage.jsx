import React, { useState } from 'react';
import LogoImage from '../assets/logo.svg';
import BackGround from '../assets/background.png';
import YoungManMeditatingImage from '../assets/young_man_meditating.png';
import LoginTemplate from './Template/LoginTemplate.jsx';
import PrimaryButton from "./Buttons/PrimaryButton.jsx";

const LoginPage = () => {
    const [isModelLoginOpen, setIsModelLoginOpen] = useState(false );
    return (
        <div className="relative flex flex-row justify-start items-center w-screen max-w-[1440px] h-screen mx-auto py-0 px-6 box-border overflow-hidden">
            <img className="-z-10 absolute -right-28 -top-44" src={BackGround} alt=""/>
            <div className="flex-col p-0 box-border gap-[63px] left-0 right-0 top-0 bottom-0 mx-auto flex justify-center items-center w-601 h-620 top-190">
                <img src={LogoImage} alt="logo" className="h-auto w-250.76 my-0" />
                <div className="text-center font-bold text-7xl text-primary font-inter w-full max-w-[600px]">
                    Well-Organized Businesses
                </div>
                <PrimaryButton label="Sign in" onClick={() => setIsModelLoginOpen(true)} />
            </div>
                <img
                    src={YoungManMeditatingImage}
                    alt="young man meditating"
                    className="w-full max-w-[485px]"
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
