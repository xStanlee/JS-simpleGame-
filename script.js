/*** SIMPLE GAME 100 POINTS WIN ***/

var scores, roundScore, activePlayer, gamePlaying, finalScore;

gamePlaying = true;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
if (gamePlaying) {
// 1. Random number

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        // 3. Updating roundScore if the number is bigger than 1

        if ( dice1 !== 1 && dice2 !== 1 ) {
        //Add score
    
            roundScore = roundScore + (dice1 + dice2) ;
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
    
    // Add score value
        
        let input = document.querySelector('.final-score').value;
        let winningScore;
        
    // Underfined, 0, null, "" are COERCED to false
        
        if(input) {
           winningScore = input;
        } else {
            
           winningScore = 100;
        }
        
    // Check if player won the game
            
    if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
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
    
     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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

