import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"

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
        <div>
            <h1>Sign Up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}></FormInput>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}></FormInput>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}></FormInput>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}></FormInput>
                <button type="submit">Sign Up</button>           
            </form>
        </div>
    )
}

export default SignUpForm