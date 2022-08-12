import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from './shop-data.js'

export const ProductContext = createContext({
    currentProducts: null,
    setCurrentProducts: () => null
})

export const ProductProvider = ({children}) => {
    /*useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, [])*/
    const [currentProducts, setCurrentProducts] = useState([])
    const value = { currentProducts, setCurrentProducts }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}