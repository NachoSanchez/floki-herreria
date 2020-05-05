import React, { createContext, useState } from 'react';

export const NavContext = createContext();

const NavContextProvider = ( props ) => {
    const [ nav, setNav ] = useState(false);

    return ( 
        <NavContext.Provider value={{ nav, setNav }}>
            {props.children}
        </NavContext.Provider>
     );
}
 
export default NavContextProvider;