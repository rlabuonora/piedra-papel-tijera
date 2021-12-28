import React from 'react';
import Header from './Header';
import Board from './Board';
import { getWinner } from '../getWinner';

class App extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handlePlayAgain = this.handlePlayAgain.bind(this);


        this.state= {
            score: 0,
            player: '',
            house: '',
            winner: ''
        };
        // state: score, player, house, winner
        // initial: 0, '', '', ''
    }
    handleClick(e, choice) {

        // update player state
        this.setState({
            player: choice
        });
        // wait 5 seconds
        setTimeout(() => {
            // pick random
            var house_choice = ['rock', 'paper', 'scissors'][Math.floor(3 * Math.random())]
            let house = house_choice;
            this.setState({
                house: house
            })
            setTimeout(() => {
                var winner = getWinner(this.state.player, this.state.house);
                if (winner === 'player') {
                    this.setState({
                        score: this.state.score + 1
                    })
                }
                this.setState({
                    winner: winner
                });
            }, 1000)
        }, 1000)
    }

    handlePlayAgain() {
        // reset player, house & winner
        this.setState({
            player: '',
            house: '',
            winner: ''
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                  <Header score={this.state.score}></Header>
                  <Board handleClick={this.handleClick}
                         player = {this.state.player}
                         house = {this.state.house}
                         winner = {this.state.winner}
                         handlePlayAgain= {this.handlePlayAgain}/>
                    <div className="rules">
                        <button>Rules</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
