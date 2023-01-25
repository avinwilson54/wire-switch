import React, {useState} from "react";
import prod1 from "../assets/resources/images/products/product-1.png"
import productData from "../data/products.json";
import switchOff from "../assets/resources/svg/logo-grayed.svg";
import switchOn from "../assets/resources/svg/logo-yellow.svg";

export default function Products() {

    const [visibility, setVisibility] = useState("hidden");

    const handleMouseEnter = () => setVisibility("visible");
    const handleMouseLeave = () => setVisibility("hidden");

    return (
        <div className="products-container">
            <div className="heading-wrapper">
                <h1 className="heading-medium heading">Our Best Sellers</h1>
                <a href="/">View All</a>
            </div>
            <div className="products-flexer">
                {productData.map(prod => {
                    return (
                        <div key={prod.id} className="product-wrapper">
                            <div className="image-container">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="image-inner">
                                    <img className="logo-img" src={switchOff} alt="Logo"/>
                                    <img 
                                        src={require("../assets/resources/images/products/" + prod.image + ".png")}
                                        style={{height: 149, width: 149, margin: "27px 0"}}
                                        alt="Product"
                                    />
                                    <button 
                                        style={{
                                            width: "100%"
                                        }} 
                                        className="primary-btn visibleOnHoverBtn"
                                    >
                                        add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="content-aligner">
                                <div className="product-content">
                                    <div className="text-primary name">{prod.name}</div>
                                    <div className="text-gray">{prod["item-code"]}</div>
                                </div>
                                <div className="discount-rate">
                                        <span className="price-tag"><strong>₹{prod.price}</strong></span>
                                        <span><del className="cutoff-rate">₹{prod.cutoff}</del></span>
                                        <span className="discount">{prod.discount} off</span>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    );
}

