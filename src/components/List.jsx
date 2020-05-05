import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { products } from '../api/products';

const List = () => {
    const { cart, setCart } = useContext(CartContext);
    
    return(
        <ul>
            { products.map( product => (
                <li 
                    key={ product.id }
                > 
                    { product.name}

                    <button onClick={ ()=>( setCart([...cart, product]) ) }>
                        Añadir al carritp
                    </button>
                </li>
            )) }
            <li></li>
            <li>Acá pagas o te contactas por whatsapp</li>
        </ul>
    );
}

export default List;