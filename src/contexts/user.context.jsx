import { createContext, useState, useEffect } from "react";
import { createUserFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsuscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsuscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}