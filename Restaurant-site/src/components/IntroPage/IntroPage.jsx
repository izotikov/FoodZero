import React from 'react';
import "./IntroPage.css";

const IntroPage = () => {
    return (
        <div className="intro-page">
            <div className="intro-page__text-block">
                <div className="intro-page__text-block--heading">
                    Healthy Eating is important part of lifestyle
                </div>
                <div className="intro-page__text-block--regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                </div>
            </div>
            <div className="intro-page__scroll">Scroll --------------------------</div>
            <img src="../../../public/plate.jfif" alt="plate" id="intro-page__food-photo"/>
        </div>
    );
};

export default IntroPage;