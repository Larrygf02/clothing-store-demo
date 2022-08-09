import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CartIcon = () => {
    const { setCurrentToggleShop, currentToggleShop, cartCount } = useContext(CartContext)
    const toggle = () => {
        setCurrentToggleShop(!currentToggleShop)
    }

    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon