import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/FLOKI.svg';
import styles from './Nav.module.css';
import NavLinks from './NavLinks';

const Nav = () => {

    return (
        <header>
            <NavLink to='/'>
                <img 
                    className={ styles.logo } 
                    src={ logo } alt="Floki herreria"
                />
            </NavLink>
            <NavLinks />
        </header>
    )
}

export default Nav;