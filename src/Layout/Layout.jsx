import React from 'react';
import AppNav from '../Components/AppNav';
 

const Layout = ({children}) => {
    return (
        <>
            <AppNav/>
            {children}
        </>
    );
};

export default Layout;