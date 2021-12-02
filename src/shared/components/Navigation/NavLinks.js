import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavLinks.module.css';

const NavLinks = () => {
    return (
        <ul className={classes.NavLinks}>
            <li><NavLink to="/" className={(navData)=> navData.isActive  ? classes.active : ''}>Home</NavLink></li>
            <li><NavLink to="/problem" className={(navData)=> navData.isActive ? classes.active : ''}>Problems</NavLink></li>
            <li><NavLink to="/about" className={(navData)=> navData.isActive ? classes.active : ''}>About</NavLink></li>
            <li><NavLink to="/contact" className={(navData)=> navData.isActive ? classes.active : ''}>Contact</NavLink></li>
        </ul>
    );
}

export default NavLinks;