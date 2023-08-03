import React from 'react';
import useAuthentication5 from '../Authentication5/useAuthentication5.jsx';
import * as PropTypes from 'prop-types';

function ScreenDesktop(props) {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            {props.children}
        </div>
    );
}

ScreenDesktop.propTypes = {
    data: PropTypes.shape({ currentVariant: PropTypes.any }),
    children: PropTypes.node,
};

function LogIn(props) {
    return (
        <div className=" bg-white flex flex-col items-center justify-center">
            {props.children}
        </div>
    );
}

LogIn.propTypes = { children: PropTypes.node };

function Top(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Top.propTypes = { children: PropTypes.node };

function Logo(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
            loading={props.loading}
            className="h-auto w-250.76 my-0"
        />
    );
}

Logo.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.string,
    loading: PropTypes.string,
};

function LogInToYourAccount(props) {
    return (
        <div className="text-center whitespace-pre-wrap font-bold text-3xl text-green-600 font-inter mt-6">
            {props.children}
        </div>
    );
}

LogInToYourAccount.propTypes = {
    data: PropTypes.shape({ currentVariant: PropTypes.any }),
    children: PropTypes.node,
};

function Input1(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Input1.propTypes = { children: PropTypes.node };

function TextFieldStandard(props) {
    const { data, fns } = useAuthentication5(); // Get the data and setters from the hook

    const handleChange = (e) => {
        const value = e.target.value;
        if (props.label === 'User Name') {
            fns.setUsername(value); // Set the username when the "UserName" field changes
        } else if (props.label === 'Password') {
            fns.setPassword(value); // Set the password when the "Password" field changes
        }
    };

    return (
        <input
            type={props.type || 'text'}
            disabled={props.disabled}
            placeholder={props.label}
            className="border border-gray-500 rounded p-2 mt-4 w-60"
            onChange={handleChange} // Call the handleChange function when the input value changes
        />
    );
}

TextFieldStandard.propTypes = {
    size: PropTypes.string,
    data: PropTypes.shape({ currentVariant: PropTypes.any }),
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
};

function Btm(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Btm.propTypes = { children: PropTypes.node };

function ButtonContained(props) {
    const { data } = useAuthentication5(); // Get the data from the authentication hook
    const [loading, setLoading] = React.useState(false);

    const handleSignIn = () => {
        setLoading(true);
        // Call the backend API to sign in with the provided username and password
        fetch('http://localhost:8080/api/signin', { // Make sure to specify the correct URL for the backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                data.authenticated = undefined;
                setLoading(false);
                if (data.authenticated) {
                    // Sign in successful, you can navigate to the grid screen or show a success message
                    console.log('Sign in successful');
                } else {
                    // Sign in failed, show an error message
                    console.log('Wrong username or password');
                }
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error during sign in:', error);
            });
    };

    return (
        <button
            disabled={props.disabled || loading}
            className={`bg-${props.color} hover:bg-${props.color}-700 text-white font-bold py-2 px-4 rounded mt-4`}
            onClick={handleSignIn} // Call the handleSignIn function when the button is clicked
        >
            {loading ? 'Signing In...' : props.children}
        </button>
    );
}

ButtonContained.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.shape({ currentVariant: PropTypes.any }),
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
};
function Authentication5(props) {
    const { data } = useAuthentication5();

    return (
        <ScreenDesktop className={props.className} data={data}>
            {/* Render the components using the properties of the 'data' object */}
            <LogIn>
                <Top>
                    <Logo src="../assets/logo.svg" alt="Logo" loading="lazy" />
                    <LogInToYourAccount data={data}>
                        {data.currentVariant === 'ScreenMobile' ? 'Log In' : 'Log In to your Account'}
                    </LogInToYourAccount>
                </Top>
                <Input1>
                    {/* Render other components using 'data' properties */}
                    <TextFieldStandard
                        variant="standard"
                        type="text"
                        disabled={false}
                        size={'medium'}
                        label={'User Name'}
                        data={data}
                    />
                    <TextFieldStandard
                        variant="standard"
                        type="password" // Change the input type to "password"
                        disabled={false}
                        size={'medium'}
                        label={'Password'}
                        data={data}
                    />
                    {/* ... other components */}
                </Input1>
                <Btm>
                    {/* Render other components using 'data' properties */}
                    <ButtonContained
                        variant="contained"
                        disabled={false}
                        size='large'
                        color='primary'
                        data={data}
                    >
                        {data.currentVariant === 'ScreenMobile' ? 'LOG IN' : 'Log In'}
                    </ButtonContained>
                    {/* ... other components */}
                </Btm>
            </LogIn>
        </ScreenDesktop>
    );
}

export default Authentication5;
