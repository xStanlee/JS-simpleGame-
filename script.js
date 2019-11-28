/*** SIMPLE GAME 100 POINTS WIN ***/

var scores, roundScore, activePlayer, gamePlaying;

gamePlaying = true;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
if (gamePlaying) {
// 1. Random number
let dice = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display result
        let diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' +dice + '.png';
        // 3. Updating roundScore if the number is bigger than 1

        if (dice !== 1) {
        //Add score
    
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
    
            //Next player
            nextPlayer();
        }
    } 
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying){
    // Add current score to global score
        scores[activePlayer] += roundScore;
    
    // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game
    
    if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
    } else {
    nextPlayer();
    }
    
    }
});

function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active'); document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.add('active');
};

