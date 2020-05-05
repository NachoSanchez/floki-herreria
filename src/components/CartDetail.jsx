import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartDetail = () => {
    const { cart } = useContext(CartContext);
    return ( 
        <ul>
            {
                cart.map( item => (
                    <li>{ item.name } - {item. id} </li>
                ))
            }
             <li></li>
            <li>Acá pagas o te contactas por whatsapp</li>
        </ul>
     );
}
 
export default CartDetail;