import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavContext } from '../contexts/NavContext';
import menu from '../assets/img/menu.svg';
import NavCart from './NavCart';
import styles from './Nav.module.css';

const NavLinks = () => {
    const { nav, setNav } = useContext(NavContext);

    return ( 
        <nav className={ styles['nav-links'] }>
            <ul>
                <li>
                    <NavLink to='/catalogo'>  
                        Catálogo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/servicios'>  
                        Servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>  
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <button 
                        className={ styles.menu }
                        onClick={ () => (setNav(!nav)) }
                    > 
                        <img src={ menu } alt=""/>
                    </button>
                </li>
            </ul>
            <NavCart />
        </nav>
     );
}
 
export default NavLinks;