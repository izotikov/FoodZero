import React, {useState} from 'react';
import './styles/Header.css';

const Header = () => {

    const [phoneNumber, setPhoneNumber] = useState('+86 852 346 000');

    return (
        <nav className='header'>
            <div className="header__img-container">
                <img src="../public/foodZeroIcon.svg" alt="FoodZeroIcon" id="header__logo"/>
                <img src="../public/menu-symbol.svg" alt="menuSymbol" id="header__menu-icon"/>
            </div>
            <div className="header__phone-number">{phoneNumber}</div>
            <div className="header__reservations">
                <div>Reservations</div>
            </div>
        </nav>
    );
};

export default Header;