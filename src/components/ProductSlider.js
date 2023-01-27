import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prod1 from "../assets/resources/images/product-slider-1.png"
import Prod2 from "../assets/resources/images/product-slider-2.png"
import Prod3 from "../assets/resources/images/product-slider-3.png"

export default function ProductSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      };
    return (
        <div className="product-container">
            <h2 className="heading-medium">New @ Wire & Switch</h2>
            <Slider {...settings}>
              <div className="product-slide">
                <img src={Prod1} alt="Ad Banner" />
              </div>
              <div className="slider">
                <img src={Prod2} alt="Ad Banner" />
              </div>
              <div className="slider">
                <img src={Prod3} alt="Ad Banner" />
              </div>
            </Slider>
        </div>
    );
}