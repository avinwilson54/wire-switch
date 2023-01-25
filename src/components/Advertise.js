import React from "react";
import ad1 from "../assets/resources/images/ad1.png"
import ad2 from "../assets/resources/images/ad2.png"

export default function Advertise() {

    return (
        <div className="advertise-wrapper">
            <a href="/"><img src={ad1} alt="Advertisement" /></a>
            <a href="/"><img src={ad2} alt="Advertisement" /></a>
        </div>
    );
}