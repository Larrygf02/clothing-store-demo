import { useContext, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";
import './shop.styles.scss'

const Shop = () => {
    const { currentProducts } = useContext(ProductContext)
    return (
        <Fragment>
            {Object.keys(currentProducts).map(title => {
                return (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {currentProducts[title].map((product) => (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            ))}
                        </div>
                    </Fragment>
                )
            }) }
        </Fragment>

    )
}

export default Shop;