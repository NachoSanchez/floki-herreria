# [**Floki Herreria**](https://floki.netlify.app)
## (ecommerce *dbless* completamente en *react.js*)

La idea de este sitio es generar una *herramienta web* para un negocio local sin incurrir en una base de datos, acotando costos solo a una presencia web. El desarrollo esta planteado en **reactjs**, **react-router** y con integracion de la **API** de **MercadoPago** en el checkout, y **Whatsapp API** para contactar a la empresa.

### **Comandos**.

* **yarn start** (app will run on localhost:300)
* **yarn build** (app build)
* **yarn test** (app testing)

### **Funcionamiento del *carrito***.

El carrito consume un *Context* ubicado en *contexts/CartContext.jsx* el cual consta de un estado donde se alojaran cada uno de los productos que se deseen comprar. El estado del carrito persiste los datos en el *localstorage* del browser.

    import React, { useContext } from ' react';
    import { CartContext } from ' ../contexts/CartContext';

    const myComponent = () => {

        const { cart, setCart } = useContext(CartContext);

        return (
            //code..
        )
    }*

    export default myComponent;

### **live demo ( https://floki.netlify.app  )**.


