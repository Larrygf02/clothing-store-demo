import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import { signInWithGooglePopup, createUserFromAuth } from "../../utils/firebase/firebase.utils"

const Authentication = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        createUserFromAuth(user)
    }

    return (
        <div>
            <h1>Sign PageDD</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication