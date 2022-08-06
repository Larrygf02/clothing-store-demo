import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";


const Shop = () => {
    const { currentProducts } = useContext(ProductContext)
    console.log(currentProducts)
    return (
        <div>
            {currentProducts.map(({id, name}) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
}

export default Shop;