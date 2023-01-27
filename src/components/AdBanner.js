import React from "react";
import AdBannerImg from "../assets/resources/images/ad-banner-3.png";

export default function AdBanner() {
    return (
        <div className="adbanner-container">
            <a href="/">
                <img src={AdBannerImg} alt="Advertisement banner"/>
            </a>
        </div>
    );
}