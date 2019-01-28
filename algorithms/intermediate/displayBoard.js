
let vertical = "\t" + "---" + "+" + "---"  + "-" + "+" + "---";

const position = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

let player_1_moves = [];
let player_2_moves = [];

let moveCount = 0;

const winningPositions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,4,8],
	[2,4,6],
	[0,3,6],
	[1,4,7],
	[2,5,8]
];



function didWin(boardMoves) {
    
    let player_that_won;
    

    if (boardMoves[0] == boardMoves[1] && boardMoves[1] == boardMoves[2] && boardMoves[0] != " ") {
        player_that_won = (boardMoves[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[3] == boardMoves[4] && boardMoves[4] == boardMoves[5] && boardMoves[3] != " ") {
        player_that_won = (boardMoves[3] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[6] == boardMoves[7] && boardMoves[7] == boardMoves[8] && boardMoves[6] != " ") {
        player_that_won = (boardMoves[6] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[0] == boardMoves[4] && boardMoves[4] == boardMoves[8] && boardMoves[0] != " ") {
        player_that_won = (boardMoves[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;   
    } else if (boardMoves[2] == boardMoves[4] && boardMoves[4] == boardMoves[6] && boardMoves[2] != " ") {
        player_that_won = (boardMoves[2] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[0] == boardMoves[3] && boardMoves[3] == boardMoves[6] && boardMoves[0] != " ") {
        player_that_won = (boardMoves[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[1] == boardMoves[4] && boardMoves[4] == boardMoves[7] && boardMoves[1] != " ") {
        player_that_won = (boardMoves[1] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (boardMoves[2] == boardMoves[5] && boardMoves[5] == boardMoves && boardMoves[2] != " ") {
        player_that_won = (boardMoves[2] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else {
        // /console.log("No winner");
        return false;
    }
}

// This function checks whether a players move
// is valid. Accepts an int, where the player
// would like to put their token
function isValidMove(move) {
        
    // Store true or false
    let result;
    
    // If the passed in number is beween 0 and 8 (the tic tac toe board),
    // and the spot is empty, return true. If the spot is taken, return false
    if (move >= 0 && move <= 8) {
        result = (position[move] == " ") ? true : false;
    } else {
        console.log("Please enter a number between 0 and 8");
        result = false;
    }
  
    //console.log(result);
   
    // Return the result, true or falsess
    return result;
}


function isGameOver() {
    
    if ((player_1_moves.length + player_2_moves.length) > 8) {
        console.log("Game is over");
        return false;   
    } else {
       // console.log("There's some moves left!");
        return true;
    }
}


function applyMove(move, player) {
    
    let token = (player == 1) ? "X" : "O";
    
    if (isValidMove(move) == false) {
        console.log("Nope");
        return false;
    } else {
        position[move] = token;
        
        if (token == "X") {
            player_1_moves.push(move);
        } else {
            player_2_moves.push(move);
        }
    }
    
    if (isGameOver() &&  didWin(position)){
        console.log("False");
        return true;
    }
}

// This function takes a string of X's, O's, or ""
// it stores the tokens in the appropriate place
// on the tic tac toe board
function importBoard(string) {

    // Store the values of the passed array
    // into the positions array
    for(let i = 0; i < position.length; i++) {
       position[i] = string[i];
       
       // Keep track of the player's move
       // Store them in an array
       if (string[i] == "X" || string[i] == "x") {
            player_1_moves.push(i);
       } else if (string[i] == "O" || string[i] == "o") {
           player_2_moves.push(i);
       }
    }
    
    console.log("String of pos: " + "[" + position + "]");
    console.log("Player 1 moves: " + "[" + player_1_moves + "]");
    console.log("Player 2 moves: " + "[" + player_2_moves + "]");
    
}

function resetBoard() {
    for (let i = 0; i < position; i++) {
        position[i] = " ";
    }
}


function displayBoard() {
    
    // Display the tic tac toe board
    let preRow1 = "\t   |    |  ";
    let row_1 = "\t" + position[0] + "  | " + position[1] + "  | " + position[2];
    let row_2 = "\t" +position[3] + "  | " + position[4] + "  | " + position[5];
    let row_3 = "\t" +position[6] + "  | " + position[7] + "  | " + position[8];

    for (let i = 1; i < 2; i++) {
        
        console.log(preRow1);
        console.log(row_1);
        console.log(preRow1);
        console.log(vertical);
        console.log(preRow1);
        console.log(row_2);
        console.log(preRow1);
        console.log(vertical);
        console.log(preRow1);
        console.log(row_3);
        console.log(preRow1);
    }
    
    console.log("****************************");
    
}


   // let boardPlaces = ["O", "X", "X", "O", "X", "O", "X", " ", "X"];
   // importBoard(boardPlaces);
    
   
    //let move = isValidMove(2);

   // displayBoard();
    
   // didWin(boardPlaces);

   // isGameOver(); 
   
    applyMove(4, 1);
    displayBoard();
    applyMove(0, 2);
    displayBoard();
    applyMove(5, 1);
    displayBoard();
    applyMove(8, 2);
    displayBoard();
    applyMove(2, 1);
    displayBoard();
   applyMove(3, 2);
    displayBoard();
    applyMove(1, 1);
    displayBoard();
   applyMove(7, 2);
    displayBoard();
    applyMove(6, 1);
    displayBoard();

  
   didWin(position);
   
   
   console.log("pos: " + position);
   console.log("player 1: [" + player_1_moves + "]");
   console.log("player 2: [" + player_2_moves + "]");
   
   displayBoard();









/*******************************************************************************/

/*for(let i = 0; i < 9; i++) {
    position[i] = "";
}*/

/*
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Player one, would you like to be X\'s or O\'s? ', (answer) => {
      console.log(`You said: ${answer}`);
      player_1 = answer;

  rl.close();
});

*/    
    
