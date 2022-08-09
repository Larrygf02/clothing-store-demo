import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './product-card.styles.scss'


const ProductCard = ({product}) => {
    const { addCarItem } = useContext(CartContext)

    const addToCart = () => {
        addCarItem(product)
    }
    
    const { name, price, imageUrl } = product
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCart}>Add to card</Button>
        </div>
    )
}

export default ProductCard