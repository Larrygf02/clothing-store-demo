import { useState } from "react"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"

import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields)
    const { email, password } = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            // setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert("Incorrect password for email")
            } else if (error.code === 'auth/user-not-found') {
                alert("No user associated with this email")
            } else {
                console.log(error)
            }
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        // setCurrentUser(user)
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign In with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" inputOptions={{'type':"email", 'required':true, 'onChange':handleChange,'name':"email", 'value':email}}></FormInput>
                <FormInput label="Password" inputOptions={{'type':"password", 'required':true, 'onChange':handleChange,'name':"password", 'value':password}}></FormInput>
                <div className="buttons-container">
                    <Button onClick={signInAuthUserWithEmailAndPassword}>Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>         
                </div>
            </form>
        </div>
    )
}

export default SignInForm