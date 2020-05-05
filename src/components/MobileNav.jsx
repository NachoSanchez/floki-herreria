import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import close from '../assets/img/close.svg'
import { NavContext } from '../contexts/NavContext';
import styles from './Nav.module.css';

const MobileNav = () => {
    const { nav, setNav } = useContext(NavContext);
    const handleClick = () => ( setNav(!nav));

    const show = nav ? styles['mobile-menu'] : styles['d-none'];

    return ( 
        <section className={ show }>
            <ul>
                <li onClick={ handleClick }>
                    <img src={ close } alt=""/>
                </li>
                <li>
                    <NavLink 
                        to='/catalogo'
                    >  
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

            </ul>
        </section>
     );
}
 
export default MobileNav;