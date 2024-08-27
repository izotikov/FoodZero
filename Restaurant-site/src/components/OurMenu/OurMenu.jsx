import React, {useState, useEffect} from 'react';
import './OurMenu.css';

const OurMenu = () => {

    const [menuDescription, setMenuDescription] = useState('This is a section of your menu. Give your section a brief description');

    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch("/API.json")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMenuItems(data.MenuItems);
            });
    }, []);

    return (
        <div className="our-menu">
            <div className="our-menu__top-block">
                <div className="our-menu__top-block__heading">Our menu</div>
                <div className="our-menu__top-block__description">{menuDescription}</div>
            </div>
            <div className="our-menu__menu-positions">
                {menuItems.map((elem) => {
                    return (
                        <div key={elem.No} className="our-menu__menu-positions__container">
                            <div className="our-menu__menu-positions__container--price">{elem.Price}</div>
                            <div className="our-menu__menu-positions__container--dish-name">{elem.Name}</div>
                            <div className="our-menu__menu-positions__container--dish-description"> {elem.Description}</div>
                        </div>

                        )
                })}
            </div>
        </div>
    );
};

export default OurMenu;