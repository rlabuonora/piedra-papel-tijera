export function getWinner(player_choice, house_choice) {

    console.log(player_choice);

    if (player_choice === house_choice) return 'tie';

    let choice_set = new Set([player_choice, house_choice]);
    var winner_choice;

    if (choice_set.has('rock') && choice_set.has('paper')) {
        winner_choice = 'paper';
    } else if (choice_set.has('paper') && choice_set.has('scissors')) {
        winner_choice = 'scissors';
    } else if (choice_set.has('scissors') && choice_set.has('rock')) {
        winner_choice = 'rock';
    } else {
        throw new Error("Invalid set of choices");
    }

    if (winner_choice === player_choice) {
        return 'player';
    } else {
        return 'house';
    }
}
