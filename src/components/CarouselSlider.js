import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import sliderImage from "../assets/resources/images/slider-img.png";
import sliderData from "../data/sliderData.json";

export default function CarouselSlider() {
    
    const settings = {
        dotsClass: "slick-dots",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 8
      };

    return (
        <div className="slider-container">
            <Slider {...settings} >
                {sliderData.map(slider => {
                    return (
                        <div key={slider.id} className="slider">
                            <img 
                                className="slider-background" 
                                src={require("../assets/resources/images/" + slider.path + ".png")}
                                alt="slider-background"
                            />
                            <div className="slider-content">
                                <div dangerouslySetInnerHTML={{__html: slider["title"]}} className="heading-primary"></div>
                                <p>{slider.content}</p>
                                <button className="primary-btn">{slider.btn}</button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}