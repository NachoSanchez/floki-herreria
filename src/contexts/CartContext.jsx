import React, { createContext, useState, useMemo, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ( props ) => {
    //Get localstorage items if there where
    const savedCart = () => {
        if( localStorage.getItem('cart') ) {
            return JSON.parse(localStorage.getItem('cart'));
        } else {
            return [];
        }
    }
    //Set context of items
    const [ cart, setCart ] = useState(savedCart());
    //Update localstorage items without overwritting them
    useEffect(() => {
        if( cart.length > 0) {
            const userCart = JSON.stringify(cart)
            localStorage.setItem('cart', userCart);
        }
    }, [ cart ]);
    //memorize the overall state of the cart
    const providerValue = useMemo(
        () => ({ cart:[...cart], setCart}), [ cart, setCart ]
    );
    return (
        <CartContext.Provider value={ providerValue }>
            { props.children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;