import { createContext, useState } from "react";

export const CartContext = createContext({
    currentToggleShop: null,
    setCurrentToggleShop: () => null,
    cartItems: [],
    addCarItem: () => null
})

export const CartShopProvider = ({children}) => {
    const [currentToggleShop, setCurrentToggleShop ] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addCarItem = (productToAdd) => {
        let product_found = cartItems.filter(item => item['id'] === productToAdd['id'])   
        let index = cartItems.findIndex(item => item['id'] === productToAdd['id'])
        const is_product_found = product_found.length > 0
        if (is_product_found) {
            cartItems[index]['quantity'] += 1
            setCartItems(cartItems)
        } else {
            let item = {...productToAdd, quantity: 1}
            cartItems.push(item)
            setCartItems(cartItems)
        }
        console.log(cartItems)
    }

    const value = { currentToggleShop, setCurrentToggleShop, cartItems, addCarItem }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}