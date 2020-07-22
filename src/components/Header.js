import React from 'react';

const Header = (props) => {
    return(
        <div className="head">
          <div className="score"> Score
            <span>{ props.score }</span>
          </div>
        </div>
    );
}


export default Header;
