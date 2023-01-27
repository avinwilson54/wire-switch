import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Prod1 from "../assets/resources/images/product-slider-1.png";
import Prod2 from "../assets/resources/images/product-slider-2.png";
import Prod3 from "../assets/resources/images/product-slider-3.png";
import arrowPrev from "../assets/resources/svg/arrow-prev.svg";
import arrowNext from "../assets/resources/svg/arrow-next.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#626262",
        content: `url(${arrowNext})`,
        padding: "17px 8px",
        // transform: "rotate(180deg)",
        height: "46px", 
        width: "23px",
        marginRight: "29px",
        borderRadius: "5px" 
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, 
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#626262",
        content: `url(${arrowPrev})`,
        padding: "17px 8px",
        height: "46px", 
        width: "23px",
        zIndex: 99,
        marginLeft: "13px",
        borderRadius: "5px" 
      }}
      onClick={onClick}
    />
  );
}

export default function ProductSlider() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="product-container">
            <h2 className="heading-medium heading">New @ Wire & Switch</h2>
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