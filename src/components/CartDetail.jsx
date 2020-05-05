import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const CartDetail = () => {
    const { cart } = useContext(CartContext);
    return ( 
        <ul>
            {
                cart.map( item => (
                    <li>{ item.name } - {item. id} </li>
                ))
            }
        </ul>
     );
}
 
export default CartDetail;