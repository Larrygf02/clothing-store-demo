import './cart-item.styles.scss'

const CartItem = ({cart_item}) => {
    const { name, quantity } = cart_item
    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;