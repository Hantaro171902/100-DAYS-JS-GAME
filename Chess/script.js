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
        } else {
            const randomIdx = Math.floor(Math.random() * possibleMoves.length);
            const move = possibleMoves[randomIdx];
            game.move(move);
            board.position(game.fen());
            recordMove(move, moveCount);    // Record and display the move with move count
            moveCount++;    // Increment the move count
        }
    }

    // Function to record and display a move in the move history
    const recordMove = (move, count) => {
        const formattedMove = count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} -`;
        moveHistory.textContent += formattedMove + ' ';
        moveHistory.scrollTop = moveHistory.scrollHeight;   // Auto-scroll to the lastest move
    }

    
})