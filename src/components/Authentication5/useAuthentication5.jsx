import React from 'react';
import useAuthentication5ResponsiveSize from '../Authentication5/useAuthentication5ResponsiveSize.jsx';


const variantOptions = {
    ScreenDesktop: 'ScreenDesktop',
    ScreenMobile: 'ScreenMobile',
};

const useAuthentication5 = () => {
    const [currentVariant, setCurrentVariant] = React.useState(
        variantOptions['ScreenDesktop']
    );

    const breakpointsVariant = useAuthentication5ResponsiveSize();

    React.useEffect(() => {
        if (breakpointsVariant !== currentVariant) {
            setCurrentVariant(breakpointsVariant);
        }
    }, [breakpointsVariant]);

    const data = { currentVariant };

    const fns = { setCurrentVariant };

    return { data, fns };
};

export default useAuthentication5;
