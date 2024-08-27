import React, {useState} from 'react';
import './Header.css';
import menuSymbol from './images/menu-symbol.svg';
import FoodZeroIcon from './images/FoodZeroIcon.svg';

const Header = () => {

    const [phoneNumber, setPhoneNumber] = useState('+86 852 346 000');

    return (
        <nav className='header'>
            <div className="header__img-container">
                <img src={FoodZeroIcon} alt="FoodZeroIcon" id="header__logo"/>
                <div className="header__menu-icon">
                    <img src={menuSymbol} alt="menuSymbol" id="header__menu-icon"/>
                </div>
            </div>
            <div className="header__phone-number">{phoneNumber}</div>
            <div className="header__reservations">
                <div>Reservations</div>
            </div>
        </nav>
    );
};

export default Header;