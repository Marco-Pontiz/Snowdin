import React, {useState, useContext}from 'react';
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, quantity: newQuantity});
        setCart(newCart)
    }

    console.log('carrito', cart);

    const removeCart = (id) => {
        return setCart(cart.filter(product => product.id !== id))
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const clearCart = () => setCart([]);

    return(
        <CartContext.Provider value={{
            removeCart,
            isInCart,
            clearCart,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider