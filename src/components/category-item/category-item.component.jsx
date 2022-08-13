import './category-item.styles.scss'
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
    let navigate = useNavigate()
    const {id, imageUrl, title } = category;
    const navigateToCategory = (category) => {
        console.log('algo')
        navigate(`shop/${category}`)
    }

    return (
        <div key={id} className="category-container" onClick={() => navigateToCategory(title)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem