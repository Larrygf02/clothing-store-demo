import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from './shop-data.js'

export const ProductContext = createContext({
    currentProducts: [],
    isLoading: true,
    setCurrentProducts: () => null
})

export const ProductProvider = ({children}) => {
    /*useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    }, [])*/
    const [isLoading, setIsLoading] = useState(true)
    const [currentProducts, setCurrentProducts] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCurrentProducts(categoryMap)
            setIsLoading(false)
            console.log(categoryMap)
        }
        getCategories()
    }, [])
    const value = { currentProducts, setCurrentProducts, isLoading }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}