import React from "react";
import Banner from "../assets/resources/images/offer_banner 3.png";
import DealOfTheDay from "../assets/resources/images/deal_of_the_day.png";
import light from "../assets/resources/images/light.png";

export default function OfferBanner() {
    return (
        <div className="offer-wrapper">
            <div className="offer-container">
                <a href="/">
                    <img src={Banner} alt="Offer banner"/>
                </a>
            </div>

            <div className="deals-container">
                <a href="/"><img src={DealOfTheDay} alt="Deals of the day" /></a>
                <a href="/"><img src={light} alt="Light" /></a>
            </div>
        </div>
    );
}