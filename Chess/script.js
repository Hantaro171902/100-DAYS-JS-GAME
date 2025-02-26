// Wait for the DOM to be fully loaded brfore executing code
document.addEventListener('DOMContentLoaded', () => {
    let board = null;   // Initialize the chessboard
    const game = new Chess();   // Create new Chess.js game instance
    const moveHistory = document.getElementById('log'); // Get move history container
    let moveCount = 1;  // Initialize the move count
    let userColor = 'w';  // Initialize the user's color as white

    // Funtion to make a random move for the computer
    const makeRandomMove = () => {
        const possibleMoves = game.moves();

        if (game.game_over()) {
            alert("Checkmate!");
        }
    }
})