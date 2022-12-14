import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"

import "./navigation.styles.scss"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"


const Navigation = () => {
    const { currentUser } = useContext(UserContext) 
    const { currentToggleShop } = useContext(CartContext)
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {
                    currentUser ? (
                      <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    ): (
                      <Link className="nav-link" to="/auth">
                        SIGN IN
                      </Link>
                    )
                }
                <CartIcon></CartIcon>
            </div>
            {currentToggleShop && <CartDropDown></CartDropDown>}
        </div>
        <Outlet></Outlet>
      </Fragment>
    )  
  }

export default Navigation;