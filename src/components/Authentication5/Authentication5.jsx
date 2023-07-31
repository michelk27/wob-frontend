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
