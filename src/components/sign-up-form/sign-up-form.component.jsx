import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"

import "./sign-up-form.styles.scss"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPasswword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Password do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserFromAuth(user, { displayName })
            resetFormFields()
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use")
            } else {
                console.log(error)
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" inputOptions={{'type':"text", 'required':true, 'onChange':handleChange,'name':"displayName", 'value':displayName}}></FormInput>
                <FormInput label="Email" inputOptions={{'type':"email", 'required':true, 'onChange':handleChange,'name':"email", 'value':email}}></FormInput>
                <FormInput label="Password" inputOptions={{'type':"password", 'required':true, 'onChange':handleChange,'name':"password", 'value':password}}></FormInput>
                <FormInput label="Confirm Password" inputOptions={{'type':"password", 'required':true, 'onChange':handleChange,'name':"confirmPassword", 'value':confirmPassword}}></FormInput>
                <Button type="submit">Sign Up</Button>           
            </form>
        </div>
    )
}

export default SignUpForm