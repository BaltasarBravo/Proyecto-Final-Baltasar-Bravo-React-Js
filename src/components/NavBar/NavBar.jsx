import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to="/">
          <h3>Cooper</h3>
        </Link>
        <div>
<NavLink to={`/category/cortantes`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Cortantes</NavLink>
<NavLink to={`/category/moldes`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Moldes</NavLink>
<NavLink to={`/category/boquillas`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}>Boquillas</NavLink>
        </div>  
       <CartWidget/>
       </nav>
    )
  }