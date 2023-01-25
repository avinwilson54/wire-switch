import React, {  } from "react";
import menuIcon from "../assets/resources/svg/menu-icon.svg";
import NavLogo from "../assets/resources/svg/logo.svg";
import SearchIcon from "../assets/resources/svg/feather_search.svg";
import userLogo from "../assets/resources/svg/user.svg";
import switchIcon from "../assets/resources/svg/switch.svg";
import shoppingCart from "../assets/resources/svg/shopping-cart.svg";

export default function Navbar() {

    return (
        <div className="navbar">
            <nav className="navbar-nav">
                <a href="/"><img src={menuIcon} className="menu-icon" alt="menu icon" /></a>
                <ul className="nav-listsA">
                    <li className="text-primary" style={{maxWidth: 62}}><a href="/">Shop by Categories</a></li>
                    <li className="text-primary"><a href="/">Brands</a></li>
                    <li className="text-primary"><a href="/">Sale</a></li>
                    <li className="text-primary"><a href="/">Help</a></li>
                </ul>
                <a className="brand-logo" href="/"><img src={NavLogo} alt="Brand Logo" /></a>
                <input
                    style={{
                        background: `url(${SearchIcon}) no-repeat scroll`,
                        backgroundPosition: "center left 14px",
                        backgroundColor: "#F6F6F6",
                        borderRadius: 5
                    }}
                    placeholder="What are you looking for?"
                    className="search-field"
                    type="text"
                />
                <div className="user-info-container">
                    <div className="user-info">
                        <a href="/">
                            <img src={userLogo} alt="User Logo" />
                            <span>Account</span>
                        </a>
                    </div>
                    <div className="user-info">
                        <a href="/">
                            <img style={{marginBottom: -3}} src={switchIcon} alt="User Logo" />
                            <span>Wishlist</span>
                        </a>
                    </div>
                    <div className="user-info">
                        <a href="/">
                            <img src={shoppingCart} alt="User Logo" />
                            <span>Cart</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}