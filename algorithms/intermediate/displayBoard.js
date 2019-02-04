
let vertical = "\t" + "---" + "+" + "---"  + "-" + "+" + "---";

const position = ["", "", "", "", "", "", "", "", ""];


//let moveCount = (player_1_moves.length + player_2_moves.length);

let player_1_moves = [];
let player_2_moves = [];


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



function didWin() {
    
    let player_that_won;
    

    if (position[0] == position[1] && position[1] == position[2] && position[0] != "") {
        player_that_won = (position[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[3] == position[4] && position[4] == position[5] && position[3] != "") {
        player_that_won = (position[3] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[6] == position[7] && position[7] == position[8] && position[6] != "") {
        player_that_won = (position[6] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[0] == position[4] && position[4] == position[8] && position[0] != "") {
        player_that_won = (position[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;   
    } else if (position[2] == position[4] && position[4] == position[6] && position[2] != "") {
        player_that_won = (position[2] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[0] == position[3] && position[3] == position[6] && position[0] != "") {
        player_that_won = (position[0] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[1] == position[4] && position[4] == position[7] && position[1] != "") {
        player_that_won = (position[1] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else if (position[2] == position[5] && position[5] == position && position[2] != "") {
        player_that_won = (position[2] == "X") ? console.log("Player 1 won!") : console.log("Player 2 won!");
        return true;
    } else {
        console.log("Nobody won...");
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
        if (!position[move]) {
            console.log("That spots open");
            return true;
        } else {
            console.log("That spots taken");
            return false;
        }
    } else {
        console.log("Please enter a number between 0 and 8");
        result = false;
    }
  
    // Return the result, true or false
    return result;
}


function isDraw() {
    
    if ((player_1_moves.length + player_2_moves.length) > 9) {
        console.log("Game is over, nobody won...");
        return true;   
    } else {
        console.log(player_1_moves.length + player_2_moves.length);
        return false;
    }
}

function applyMove(move, player) {

    position[move] = fillPlayerArrays(move, player);
}


function processMove(move, player) {
    
    if (!isValidMove(move)) {
        console.log("Nope");
        return false;
    } else {
        applyMove(move, player);

        if (isDraw() && didWin()){
            console.log("TODO");
            return true;
        }
    }
}

function fillPlayerArrays(move, player) {
    
    let token = (player == 1) ? "X" : "O";
        
    if (token == "X") 
        player_1_moves.push(move);
    else 
        player_2_moves.push(move);
        
    return token;
}


// This function takes a string of X's, O's, or ""
// it stores the tokens in the appropriate place
// on the tic tac toe board
function importBoard(string) {

    // Store the values of the passed array
    // into the positions array
    for(let i = 0; i < position.length; i++) {
       position[i] = string[i];;
     
       
       // Keep track of the player's move
       // Store them in an array
       if (string[i] == "X" || string[i] == "x") {
            player_1_moves.push(i);
       } else if (string[i] == "O" || string[i] == "o") {
           player_2_moves.push(i);
       }
    }
}

function resetBoard() {
    for (let i = 0; i < position; i++) {
        position[i] = "";
    }
}


function displayBoard() {
    
    // Display the tic tac toe board
    let preRow1 = "\t   |    |  ";
    let row_1 = "\t" + position[0] + "   | " + position[1] + "   | " + position[2];
    let row_2 = "\t" +position[3] + "  | " + position[4] + "   | " + position[5];
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


    let boardPlaces = ["", "", "X", "X", "", "", "O", "", "O"];
    importBoard(boardPlaces);
    
   
    processMove(7, 1);
   
   
   
    //let move = isValidMove(2);

   // displayBoard();
    
   // didWin(boardPlaces);

   // isGameOver(); 
  
  // didWin(position);
   
   
   console.log("pos: ", position);
   console.log("player 1: ", player_1_moves);
   console.log("player 2: ", player_2_moves);
   console.log("Did somebody win? ", didWin());
   console.log("Is there a draw? ", isDraw());
   console.log();
   
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
    
