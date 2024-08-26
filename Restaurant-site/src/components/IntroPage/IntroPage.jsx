import React from 'react';
import "./IntroPage.css";

const IntroPage = () => {
    return (
        <div className="intro-page">
            <div className="intro-page__text-block">
                <div className="intro-page__text-block--heading">
                    Healthy Eating <br/>is important <br/>part of lifestyle
                </div>
                <div className="intro-page__text-block--regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Neque congue arcu
                </div>
            </div>
            <div className="intro-page__scroll">Scroll --------------------------</div>
            <img src="../../../public/plate.jfif" alt="plate" id="intro-page__food-photo"/>
            <div className="intro-page__photo-container">
                <img src="../../../public/intro-page__food-from-list-1.png" alt="plate with food"/>
                <img src="../../../public/intro-page__food-from-list-2.png" alt="plate with food"/>
                <img src="../../../public/intro-page__food-from-list-3.png" alt="plate with food"/>
            </div>
            <div className="intro-page__clam-and-vegetable-container">
                <img src="../../../public/clam and vegetable soup in white ceramic bowl.jfif" alt="clam and vegetable soup in white ceramic bowl"/>
                <div className="intro-page__clam-and-vegetable-container--heading">Start to plan <br/>your diet today</div>
                <div className="intro-page__clam-and-vegetable-container--regular">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Neque congue arcu</div>
            </div>
            <div className="intro-page__pepper-and-salt-container">
                <div className="intro-page__clam-and-vegetable-container--regular">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Neque congue arcu</div>
                <img src="../../../public/two black pepper and salt grinders.jfif" alt="two black pepper and salt grinders"/>
            </div>
        </div>
    );
};

export default IntroPage;