import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import { signInWithGooglePopup, createUserFromAuth } from "../../utils/firebase/firebase.utils"
import "./authentication.scss"
const Authentication = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        createUserFromAuth(user)
    }

    return (
        <div>
            <h1>Sign PageDD</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <div className="auth-container">
                <SignInForm></SignInForm>
                <SignUpForm></SignUpForm>
            </div>
        </div>
    )
}

export default Authentication