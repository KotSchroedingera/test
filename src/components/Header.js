import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <label className='popup-button' htmlFor='popup-checkbox'>
        Open pop-up button
      </label>
      <input type='checkbox' id='popup-checkbox' />
      <div className='popup'>
        <div className='popup__close-button'>
          <label htmlFor='popup-checkbox' className='button--close'>
            X
          </label>
        </div>
        <div className='popup__content'>
          <p>Pop-up</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
