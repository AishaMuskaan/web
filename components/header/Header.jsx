import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import Logo from '../../img/bloglogo.png';

const Header = () => {
    const navigate = useNavigate();

    const logout = () => navigate('/account');

    return (
        <AppBar className="app-bar">
            <Toolbar className="toolbar">
            <div>
            <img src={Logo}></img>
            </div>
                <div>
                <Link to='/'>HOME</Link>
                <div className="dropdown">
                    <Link
                        to='/blog'
                        className="dropbtn"
                        onClick={(e) => e.preventDefault()}
                    >
                        BLOG
                    </Link>
                    <div className="dropdown-content">
                        <a onClick={() => navigate('/?category=Music')}>Music</a>
                        <a onClick={() => navigate('/?category=Movies')}>Movies</a>
                        <a onClick={() => navigate('/?category=Sports')}>Sports</a>
                        <a onClick={() => navigate('/?category=Tec')}>Tec</a>
                        <a onClick={() => navigate('/?category=Fashion')}>Fashion</a>
                    </div>
                </div>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account' onClick={logout}>LOGOUT</Link>
                </div>
            </Toolbar> 
        </AppBar>
    );
};

export default Header;






