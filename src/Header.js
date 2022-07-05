import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <img className="header__logo" src={require('./amazon.png').default} alt='amazon logo' />
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            {/* Logo */}
        </div>
        <div className="header__nav">
            <div className='header__option'>
                <span className='header__optionLineOnline'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOnline'>Returns</span>
                <span className='header__optionLineTwo'>Orders</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOnline'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
           
        </div>
    </div>
   
  )
};

export default Header;