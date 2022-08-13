import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import './shop.styles.scss'

const Shop = () => {
    const { currentProducts, isLoading } = useContext(ProductContext)
    if (!isLoading) {
        return (
            <Fragment>
                {
                    Object.keys(currentProducts).map(category => {
                        return (
                            <Fragment key={category}>
                                <h2>{category.toUpperCase()}</h2>
                                <div className="products-container">
                                    {currentProducts[category].map((product) => (
                                        <ProductCard key={product.id} product={product}></ProductCard>
                                    ))}
                                </div>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        )
    } else {
        return (
            <h2>Loading</h2>
        )
    }
}

export default Shop;