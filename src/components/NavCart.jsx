import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from '../assets/img/cart.svg';
import { CartContext } from '../contexts/CartContext';
import styles from './Nav.module.css';

const NavCart = () => {
    const { cart } = useContext(CartContext)
    return ( 
        <NavLink to='/checkout' className={ styles['cart_container'] }>
            <img 
                className={ styles.cart }
                src={ cartIcon } alt=""/>
            {
                cart.length > 0 && (
                    <span>
                        <p>{ cart.length }</p>
                    </span>
                )
            }
        </NavLink> 
    );
}
 
export default NavCart;