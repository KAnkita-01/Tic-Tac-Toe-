const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

// Handle cell clicks
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (gameBoard[index] === "" && gameActive) {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.style.color = currentPlayer === "X" ? "#2196F3" : "#f44336";
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

// Check for a winner
function checkWinner() {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            setTimeout(() => alert(`${gameBoard[a]} wins!`), 100);
            return;
        }
    }

    if (!gameBoard.includes("")) {
        gameActive = false;
        setTimeout(() => alert("It's a draw!"), 100);
    }
}

// Reset game
resetButton.addEventListener("click", () => {
    gameBoard.fill("");
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
});
