import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react/cjs/react.development"

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="nav-link" to="/">
                <div>Logo</div>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet></Outlet>
      </Fragment>
    )  
  }

export default Navigation;