import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKT,
    messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
    appId: process.env.REACT_APP_APPID
};


// Initialize Firebase  
const app = initializeApp(firebaseConfig);

const google_provider = new GoogleAuthProvider()

google_provider.setCustomParameters({
    prompt: "select_account"
})

export default app
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, google_provider)
export const db = getFirestore()

export const createUserFromAuth = async (userAuth, additional_information={}) => {
    const userDocRef = doc(db,'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additional_information
            })
        } catch (error) {
            console.log('Error creating the user ', error.message)   
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)