import React from "react";
import Banner from "../assets/resources/images/offer_banner 3.png";
import DealOfTheDay from "../assets/resources/images/deal_of_the_day.png";
import light from "../assets/resources/images/light.png";
import Adapter from "../assets/resources/images/adapter.png";

export default function OfferBanner() {
    return (
        <div className="offer-wrapper">
            <div className="offer-container">
                <a href="/">
                    <img src={Banner} alt="Offer banner"/>
                </a>
            </div>

            <div className="deals-container">
                <div className="limited-time-deal">
                    <div className="limited-time-content">
                        <span className="text-yellow limited">Limited Quantities</span>
                        <h1 className="heading-medium-dark heading">Deal of the Day</h1>
                        <div className="countdown-timer-container">
                            <div className="countdown-timer">
                                <span className="time-style">10</span>
                                <span className="type-style">hours</span>
                            </div>
                            <span className="colon">:</span>
                            <div className="countdown-timer">
                                <span className="time-style">47</span>
                                <span className="type-style">mins</span>
                            </div>
                            <span className="colon">:</span>
                            <div className="countdown-timer">
                                <span className="time-style">35</span>
                                <span className="type-style">sec</span>
                            </div>
                        </div>
                        <div className="text-primary-lg text">NHA Multiplug Travel Worldwide Adaptor</div>
                        <div className="price"><strong>₹300.00</strong> <del>₹800.00</del></div>
                        <button className="primary-btn btn">buy now</button>
                    </div>
                    <div className="product-img">
                        <img src={Adapter} alt="Adapter" />
                    </div>
                </div>
                <div><a href="/"><img src={light} alt="Light" /></a></div>
            </div>
        </div>
    );
}