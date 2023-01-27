import React, { useState } from "react";
import ProdRecData from "../data/productsRec.json";
import switchOff from "../assets/resources/svg/logo-grayed.svg";
import switchOn from "../assets/resources/svg/logo-yellow.svg";

export default function ProductsRec() {

    const [visibility, setVisibility] = useState("hidden");

    const handleMouseEnter = () => setVisibility("visible");
    const handleMouseLeave = () => setVisibility("hidden");

    return (
        <div className="products-container">
            <div className="heading-wrapper">
                <h2 className="heading-medium heading">Recommended Devices</h2>
                <a href="/">View All</a>
            </div>
            <div className="products-flexer" style={{display: "flex", alignItems: "stretch"}}>
                {ProdRecData.map(prod => {
                    return (
                        <div key={prod.id} className="product-wrapper">
                            <div className="image-container">
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="image-inner"
                                >
                                    <img className="logo-img" src={switchOff} alt="Logo"/>
                                    <img 
                                        src={require("../assets/resources/images/products-recommended/" + prod.image + ".png")}
                                        style={{height: 149, maxWidth: 149, margin: "27px 0"}}
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