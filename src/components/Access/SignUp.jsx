import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import useAuthentication5 from "../Template/useAuthentication5.jsx";

function ScreenDesktop(props) {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
            {props.children}
        </div>
    );
}

ScreenDesktop.propTypes = {
    data: PropTypes.shape({currentVariant: PropTypes.any}),
    className: PropTypes.string,
    children: PropTypes.node
};

function LogIn(props) {
    return (
        <div className=" bg-white flex flex-col items-center justify-center">
            {props.children}
        </div>
    );
}

function Top(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Top.propTypes = {children: PropTypes.node};

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
    src: PropTypes.string,
    alt: PropTypes.string,
    loading: PropTypes.string
};

function LogInToYourAccount(props) {
    return (
        <div className="text-center whitespace-pre-wrap font-bold text-3xl text-green-600 font-inter mt-6">
            {props.children}
        </div>
    );
}

LogInToYourAccount.propTypes = {
    data: PropTypes.shape({currentVariant: PropTypes.any}),
    children: PropTypes.node
};

function Input1(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Input1.propTypes = {children: PropTypes.node};

function TextFieldStandard(props) {
    return (
        <input
            type={props.type || 'text'}
            disabled={props.disabled}
            placeholder={props.label}
            className="border border-gray-500 rounded p-2 mt-4 w-60"
        />
    );
}

TextFieldStandard.propTypes = {
    size: PropTypes.string,
    data: PropTypes.shape({currentVariant: PropTypes.any}),
    onChange: PropTypes.func,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string
};

function ButtonContained(props) {
    return (
        <button
            disabled={props.disabled}
            className={`bg-${props.color} hover:bg-${props.color}-700 text-white font-bold py-2 px-4 rounded mt-4`}
        >
            {props.children}
        </button>
    );
}

ButtonContained.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.shape({currentVariant: PropTypes.any}),
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
};

function Btm(props) {
    return (
        <div className="flex flex-col items-center justify-start">
            {props.children}
        </div>
    );
}

Btm.propTypes = {children: PropTypes.node};

function SignUp(props) {
    const { data } = useAuthentication5();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validate passwords match
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Perform API call to backend (Java) to create the user
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                alert('User registered successfully.');
                // Redirect to the sign-in screen or grid screen
                // You can use React Router's history or other navigation methods here
            } else {
                const errorMessage = await response.text();
                alert(`Failed to register user. ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error while signing up:', error);
        }
    };
    return (
        <ScreenDesktop className={props.className} data={data}>
            <LogIn>
                <Top>
                    <Logo src="../assets/logo.svg" alt="Logo" loading="lazy" />
                    <LogInToYourAccount data={data}>
                        {data.currentVariant === 'ScreenMobile' ? 'Sign Up' : 'Sign Up to your Account'}
                    </LogInToYourAccount>
                </Top>
                <Input1>
                    <TextFieldStandard
                        variant="standard"
                        type="email"
                        disabled={false}
                        size={'medium'}
                        label={'Email'}
                        data={data}
                        onChange={handleChange}
                    />
                    <TextFieldStandard
                        variant="standard"
                        type="password"
                        disabled={false}
                        size={'medium'}
                        label={'Password'}
                        data={data}
                        onChange={handleChange}
                    />
                    <TextFieldStandard
                        variant="standard"
                        type="password"
                        disabled={false}
                        size={'medium'}
                        label={'Confirm Password'}
                        data={data}
                        onChange={handleChange}
                    />
                </Input1>
                <Btm>
                    <ButtonContained
                        variant="contained"
                        disabled={false}
                        size='large'
                        color='primary'
                        data={data}
                        onClick={handleSubmit}
                    >
                        {data.currentVariant === 'ScreenMobile' ? 'SIGN UP' : 'Sign Up'}
                    </ButtonContained>
                </Btm>
            </LogIn>
        </ScreenDesktop>
    );
}

SignUp.propTypes = {
    className: PropTypes.string,
};

export default SignUp;
