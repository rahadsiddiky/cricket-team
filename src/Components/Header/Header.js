import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Header;