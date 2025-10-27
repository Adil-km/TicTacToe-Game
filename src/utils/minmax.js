// Minimax Functions
import { winConditions } from "./state.js";

function evaluate_board(board) {
    const playerX = 'X'; // Maximizer
    const playerO = 'O'; // Minimizer

    // Check Win/Loss (+10 or -10)
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        // AI wins (O) is -10 (Minimizer wants lowest score)
        if (board[a] === playerO && board[b] === playerO && board[c] === playerO) return -10;
        // Opponent wins (X) is +10 (Maximizer wants highest score)
        if (board[a] === playerX && board[b] === playerX && board[c] === playerX) return 10;
    }
    
    // Check Draw (0)
    if (!board.includes("")) return 0;
    
    return -1; 
}


function minimax(board, is_maximizer, depth, alpha, beta) {
    // 1. BASE CASE: If the position is a terminal state, return the score.
    let score = evaluate_board(board);
    if (score !== -1) { 
        return score;
    }
    
    const current_player_symbol = is_maximizer ? 'X' : 'O';

    if (is_maximizer) {
        // Maximizer's turn ('X') - aims for a high score.
        let maximizer = -Infinity;
        
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                // 3. Make the move on a COPY (CRITICAL FIX: Prevent original options mutation)
                let new_board = [...board]; 
                new_board[i] = current_player_symbol;

                // 4. Call minimax recursively for the other player
                let current_score = minimax(new_board, false, depth + 1, alpha, beta);
                
                // 5. Update the best score found so far
                maximizer = Math.max(maximizer, current_score);

                alpha = Math.max(alpha, current_score);
                if (beta <= alpha) break;
            }
        }
        // 7. Return the final best score.
        return maximizer;
            
    } else { 
        // Minimizer's turn ('O') - aims for a low score.
        let minimizer = Infinity;
        
        for (let i = 0; i < 9; i++) {
            if (board[i] === "") {
                // 3. Make the move on a COPY (CRITICAL FIX: Prevent original options mutation)
                let new_board = [...board];
                new_board[i] = current_player_symbol;
                
                // 4. Call minimax recursively for the Maximizer
                let current_score = minimax(new_board, true, depth + 1, alpha, beta);
                
                // 5. Update the best (lowest) score found so far
                minimizer = Math.min(minimizer, current_score);

                beta = Math.min(beta, current_score);
                if (beta <= alpha) break;
            }
        }
        // 7. Return the final best (lowest) score.
        return minimizer;
    }
}


export default function find_best_move(options) {
    let bestscore = Infinity; // AI ('O') is the minimizer, so we start high
    let bestMove = -1; 

    // AI is 'O', which is the minimizer
    for (let i = 0; i < 9; i++) {
        // Create a temporary copy for the move simulation
        let current_board_copy = [...options]; 
        
        if (current_board_copy[i] === "") {
            // Simulate the AI's move
            current_board_copy[i] = 'O';
            
            // Now, evaluate this move by calling minimax for the MAXIMIZER ('X')
            // because after 'O' moves, it will be 'X's turn.
            let currentScore = minimax(current_board_copy, true, 0, -Infinity, Infinity); 
            
            // We are looking for the minimum score since 'O' is the minimizer
            if( currentScore < bestscore){
                bestscore = currentScore;
                bestMove = i;
            }
        }
    }
    return bestMove;
}