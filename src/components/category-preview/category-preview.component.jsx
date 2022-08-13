
import { useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../product-card/product-card.component";
import './category-preview.styles.scss'

const CategoryPreview = () => {
    const { currentProducts, isLoading } = useContext(ProductContext)
    const params = useParams()
    const { category } = params;
    const CATEGORIES = ['hats', 'jackets', 'mens', 'sneakers', 'womens']
    if (!isLoading) {
        if (CATEGORIES.includes(category)) {
            return (
                <Fragment key={category}>
                    <h2 className="title">{category.toUpperCase()}</h2>
                    <div className="products-container">
                        {currentProducts[category].map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))}
                    </div>
                </Fragment>
            )
        } else {
            return (
                <h2>Incorrect Category</h2>
            )
        }
    } else {
        return (
            <h2>Loading</h2>
        )
    }
}

export default CategoryPreview;