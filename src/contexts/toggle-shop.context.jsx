import { createContext, useState } from "react";

export const ToggleShopContext = createContext({
    currentToggleShop: null,
    setCurrentToggleShop: () => null
})

export const ToogleShopProvider = ({children}) => {
    const [currentToggleShop, setCurrentToggleShop ] = useState(false)
    const value = { currentToggleShop, setCurrentToggleShop }
    return <ToggleShopContext.Provider value={value}>{children}</ToggleShopContext.Provider>
}