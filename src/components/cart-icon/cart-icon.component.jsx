import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { ToggleShopContext } from '../../contexts/toggle-shop.context'
import { useContext } from 'react'

const CartIcon = () => {
    const { setCurrentToggleShop, currentToggleShop } = useContext(ToggleShopContext)
    const toggle = () => {
        setCurrentToggleShop(!currentToggleShop)
    }

    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon className="shopping-icon"></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon