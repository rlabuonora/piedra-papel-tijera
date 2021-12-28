import React from 'react';

const PlayerResult = (props) => {
    return(
        <div className="you">
            <button disabled id={props.choose}>{props.choose}</button>
            <span>You Picked</span>
        </div>
    )
}

const HouseResult = (props) => {
    // TODO: test for null and pass stub
    var choose;
    if (props.choose === '') {
        choose = "stub";
    } else {
        choose = props.choose;
    }
    return(
        <div className="house">
            <button disabled id={choose}>{choose}</button>

            <span>The House Picked</span>
        </div>
    )
}
const PlayAgain = (props) => {

    if (props.winner === '') {
        return (<div className="playagain"></div>);
    }

    var message;

    if (props.winner === "player") {
        message = "You win";
    } else if (props.winner === "house") {
        message = "You lose";
    } else {
        message = "Tie!";
    }
    return (
        <div className="playagain">
            <div>{ message }</div>
          <button onClick={props.handlePlayAgain}>Play Again</button>
        </div>
    )

}

const Result = (props) => {
    return (
        <>
        <div className="result">
            <PlayerResult choose={props.player} />
            <HouseResult choose={props.house} />
        </div>
        <PlayAgain winner={props.winner}
                    handlePlayAgain={props.handlePlayAgain}/>
        </>
    )
}


export default Result;
