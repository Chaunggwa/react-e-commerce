import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../assets/logo.svg";
import { ShopContext } from "../context/shop_context";
export const Navbar = () => {
    const {getTotalItem} = useContext(ShopContext);
    return (
        <div className="navbar sticky-top bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/">
                <img src={logo} alt="logo" style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
            </Link>
        
            <Link to="/" className="nav-link fw-bold">Shop</Link>
            <Link to="/cart" className="nav-link">
            <span class="position-relative">
  <ShoppingCart size={30} />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary">
    {getTotalItem()}
    <span class="visually-hidden">Number of items in cart</span>
  </span>
</span>
            </Link>
        </div>
    </div>);
}