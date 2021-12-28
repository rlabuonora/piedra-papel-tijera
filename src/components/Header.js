import React from 'react';
import logo from '../css/images/logo.svg';

const Header = (props) => {
    return(
        <div className="head">
          <img src={logo} alt="Game Logo" />
          <div className="score"> Score
            <span>{ props.score }</span>
          </div>
        </div>
    );
}


export default Header;
