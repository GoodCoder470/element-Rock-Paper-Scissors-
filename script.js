let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['Water', 'Earth', 'Fire', 'Air'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'Water' && computerChoice === 'Earth') ||
        (playerChoice === 'Earth' && computerChoice === 'Fire') ||
        (playerChoice === 'Fire' && computerChoice === 'Air') ||
        (playerChoice === 'Air' && computerChoice === 'Water')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = `Player: ${playerScore} - Computer: ${computerScore}`;
}


