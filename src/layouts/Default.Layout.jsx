
import React from 'react';
import NavBar from '../components/Navbar/Navbar.Component.jsx';

const DefaultLayout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default DefaultLayout;