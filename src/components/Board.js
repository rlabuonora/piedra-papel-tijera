import React from 'react';
import Result from './Result';

const ChoiceButton = (props) => {

    return (
        <div>
          <button id={props.choice}
                  onClick={(e) => props.handleClick(e, props.choice)}>
            paper</button>
        </div>
    );
}

class Board extends React.Component {

    render() {
        const choices = (
            <div className="board">
              <ChoiceButton
                handleClick={this.props.handleClick}
                choice={"paper"} />

              <ChoiceButton
                handleClick={this.props.handleClick}
                choice={"scissors"}/>

              <ChoiceButton
                handleClick={this.props.handleClick}
                choice={"rock"} />
            </div>
        );
        if (this.props.player === '') {
            return choices;
        } else {
            return(
                <Result player={this.props.player}
                        house={this.props.house}
                        winner={this.props.winner}
                        handlePlayAgain={this.props.handlePlayAgain}/>
            );
        }

    }

}
export default Board;
