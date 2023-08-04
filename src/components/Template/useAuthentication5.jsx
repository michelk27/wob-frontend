import React from 'react';
import useAuthentication5ResponsiveSize from './/useAuthentication5ResponsiveSize.jsx';


const variantOptions = {
    ScreenDesktop: 'ScreenDesktop',
    ScreenMobile: 'ScreenMobile',
};

const useAuthentication5 = () => {
    const [currentVariant, setCurrentVariant] = React.useState(
        variantOptions['ScreenDesktop']
    );
    const [username, setUsername] = React.useState(''); // Add the username state
    const [password, setPassword] = React.useState(''); // Add the password state

    const breakpointsVariant = useAuthentication5ResponsiveSize();

    React.useEffect(() => {
        if (breakpointsVariant !== currentVariant) {
            setCurrentVariant(breakpointsVariant);
        }
    }, [breakpointsVariant]);

    const data = { currentVariant, username, password }; // Include username and password in the data object

    const fns = { setCurrentVariant, setUsername, setPassword }; // Add setters for username and password

    return { data, fns };
};


export default useAuthentication5;