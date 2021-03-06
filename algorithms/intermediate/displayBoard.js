
let vertical = "      -----+-----+-----";

let position = ["", "", "", "", "", "", "", "", ""];

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

    
var readline = require('readline-sync');

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
       if (string[i] == "X") {
            player_1_moves.push(i);
       } else if (string[i] == "O") {
           player_2_moves.push(i);
       }
    }
}


// This function checks whether a players move
// is valid. Accepts an int, where the player
// would like to put their token
function isValidMove(move) {
    
    // If the passed in number is beween 0 and 8 (the tic tac toe board),
    // and the spot is empty, return true. If the spot is taken, return false
    if (move >= 0 && move <= 8 && move != -1) {
        if (position[move] == "") {
            return true;
        } else {
            console.log("That spots taken, try again.");
            return false;
        }
    } else {
        console.log("Please enter a number between 0 and 8");
        return false;
    }
}


function applyMove(move) {

    let token = (moveCount % 2 == 0) ? "X" : "O";
    
    position[move] = token;
}


function processMove(move) {
    
    if (!isValidMove(move)) {
        return false;
    } else {
        applyMove(move);
        moveCount++;

        if (moveCount % 2 != 0)
            player_1_moves.push(move);
        else
            player_2_moves.push(move);
            
       isGameOver();
    }
}


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
        return false;
    }
}


function isDraw() {
    
    if ((player_1_moves.length + player_2_moves.length) > 8) 
        return true;   
    else 
        return false;
}


function isGameOver() {
    
   if (isDraw()) {
       console.log("Looks like the board is full, nobody won...");
       console.log("Game Over!");
       resetBoard();
   } else if (didWin()) {
       console.log("Looks like we've got a winner!!");
       resetBoard();
   }
   
}     


function resetBoard() {
    
    for(let i = 0; i < position.length; i++)
        position[i] = "";
   
    player_1_moves = [];
    player_2_moves = [];
    
    console.log("Resetting board...");
}


function test_player1_win() {
  
    processMove(2, 1);
    processMove(5, 2);
    processMove(1, 1);
    processMove(8, 2);
    processMove(0, 1);
}

function test_player2_win() {
    
    processMove(2, 1);
    processMove(0, 2);
    processMove(5, 1);
    processMove(3, 2);
    processMove(7, 1);
    processMove(6, 2);
}

function test_draw() {
    
    processMove(1, 1);
    processMove(0, 2);
    processMove(4, 1);
    processMove(2, 2);
    processMove(8, 1);
    processMove(3, 2);
    processMove(6, 1);
    processMove(7, 2);
    processMove(5, 1);

}

function diagnalWin() {
    
    processMove(0, 1);
    processMove(4, 1);
    processMove(8, 1);

}

function colWin() {
    
    processMove(0, 2);
    processMove(3, 2);
    processMove(6, 2);
}

function rowWin() {
    
    processMove(6, 1);
    processMove(7, 1);
    processMove(8, 1);
}

function userInterface() {
    
    
    console.log("\tWelcome to Tic Tac Toe!");
    console.log("\t~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("To take your turn, enter a number between 1 and 9.\nThis number will correspond with a place on the board.");
    console.log("Enter 'q' to quit at any time.");
    console.log("Player 1, you are 'X'. Player 2, you are 'O'.");
    console.log("Naturally, player 1 you are first.\n");
    
    while (true) {
           
        var message = (moveCount % 2 == 0) ? "Player 1 move: " : "Player 2 move: ";
        var input= readline.question(message);
        
      
        if (input == 'q' || input == 'h')
           break;
        else
            var move = parseInt(input);
        
      //  moveCount++;
        processMove(move); 
        displayBoard();
       
        console.log("player 1: ", player_1_moves);
        console.log("player 2: ", player_2_moves);
        console.log("MC: " + moveCount);
          
        if (isGameOver())
            break;
        
        
       
    } 
    moveCount--;
    console.log("You've exited the game...");
}

function displayBoard() {
    
    // Display the tic tac toe board
    let preRow1 = "\t   |     |  ";
    let row_1 = "\t" + "  " + position[0]  + "  " + "|"  + "  " +  position[1] + "  " + "|" + "  " + position[2];
    let row_2 = "\t"  + position[3]  + "  |  "  +  position[4] + "  | " + " " + position[5];
    let row_3 = "\t"  + position[6]  + "  |  "  +  position[7] + "  | " + " " + position[8];

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



async function main() {
    
   // var board = ['O', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O'];
  //  importBoard(board);
    
    //test_player1_win();
    //test_player2_win();
    //test_draw();
    //diagnalWin();
    //rowWin();
    //colWin();
    //displayBoard();
   
   /* console.log("pos: ", position);
    console.log("player 1: ", player_1_moves);
    console.log("player 2: ", player_2_moves);4
    
    console.log("Did somebody win? ", didWin());
    console.log("Is there a draw? ", isDraw());*/
    
    userInterface();

    
    
    console.log();
    console.log(moveCount);
    console.log("player 1: ", player_1_moves);
    console.log("player 2: ", player_2_moves);
 }
 
 
 
    main();
 
 
 
 
 
 
 
 // continue - restart loop
 // break -- end loop
 
 // first function - ask user for input repeatedly, validate input
 // give user input option to break out of the game
 
 
 
 
 
 
 
 
 
   
 
  