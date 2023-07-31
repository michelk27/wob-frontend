import React from 'react';
import { ReactComponent as SignInImage } from '../../assets/images/Sign In.svg'; // Replace with the actual path to your Sign In image

const SignIn = () => {
    return (
        <div className="flex w-416 h-74 px-76 justify-center items-center gap-10 rounded-10 bg-primary">
            <SignInImage className="h-6 w-6" /> {SignIn.svg}
            <span className="text-white font-medium">Sign In</span>
        </div>
    );
};

export default SignIn;
