import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    currentToggleShop: null,
    setCurrentToggleShop: () => null,
    cartItems: [],
    addCarItem: () => null,
    cartCount: 0,
    setCartCount: () => null
})

export const CartShopProvider = ({children}) => {
    const [currentToggleShop, setCurrentToggleShop ] = useState(false)
    const [cartCount, setCartCount ] = useState(0)
    let [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem ) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addCarItem = (productToAdd) => {
        let existProduct = cartItems.find(item => item['id'] === productToAdd['id'])
        if (existProduct) {
            cartItems = cartItems.map((item) => item['id'] === productToAdd['id'] ? {...item, quantity: item.quantity + 1}: item)
            setCartItems(cartItems)
        } else {
            let item = {...productToAdd, quantity: 1}
            cartItems.push(item)
            setCartItems(cartItems)
        }
        console.log(cartItems)
    }

    const value = { currentToggleShop, setCurrentToggleShop, cartItems, addCarItem, cartCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}