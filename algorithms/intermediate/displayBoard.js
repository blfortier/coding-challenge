
let vertical = "--"  + "+" + "--"  + "-" + "+" + "--";

const position = ["", "", "", "", "", "", "", "", ""];

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


function wins(player1) {
    
    const finalResults = [];
    
    player1.forEach((arr1) => winningPositions.forEach((arr2) =>
        {if(arr1 == arr2) {
            finalResults.push(arr1)
        }
      }
    ));
    
    console.log("FR " + finalResults);
 
    
    
    
   /* 
    if (boardMoves[0] == boardMoves[1] && boardMoves[1] == boardMoves[2]) {
        console.log("Winner!");
    } else if (boardMoves[3] == boardMoves[4] && boardMoves[4] == boardMoves[5]) {
        console.log("Winner!");
    } else if (boardMoves[6] == boardMoves[7] && boardMoves[7] == boardMoves[8]) {
        console.log("Winner!");
    } else if (boardMoves[0] == boardMoves[4] && boardMoves[4] == boardMoves[8]) {
        console.log("Winner!");
    } else if (boardMoves[2] == boardMoves[4] && boardMoves[4] == boardMoves[6]) {
        console.log("Winner!");
    } else if (boardMoves[0] == boardMoves[3] && boardMoves[3] == boardMoves[6]) {
        console.log("Winner!");
    } else if (boardMoves[1] == boardMoves[4] && boardMoves[4] == boardMoves[7]) {
        console.log("Winner!");
    } else if (boardMoves[2] == boardMoves[5] && boardMoves[5] == boardMoves[8]) {
        console.log("Winner!");
    } else
        console.log("OK");*/
    
}


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

function isValidMove(move) {
    let result;
    
   switch(move) {
        case 0:
           result = (position[0] == "") ? true : false;
           console.log(result);
           break;
        case 1:
            result = (position[1] == "") ? true : false;
            console.log(result);
            break;
        case 2:
           result = (position[2] == "") ? true : false;
           console.log(result);
           break;
        case 3:
            result = (position[3] == "") ? true : false;
           console.log(result);
           break;
        case 4:
            result = (position[4] == "") ? true : false;
           console.log(result);
           break;
        case 5:
            result = (position[5] == "") ? true : false;
            console.log(result);
            break;
        case 6:
            result = (position[6] == "") ? true : false;
            console.log(result);
            break;
        case 7:
           result = (position[7] == "") ? true : false;
           console.log(result);
           break;
        case 8:
            result = (position[8] == "") ? true : false;
            console.log(result);
            break;
   }
   
   return result;
}



function importBoard(string) {

    for(let i =0; i < position.length; i++) {
       position[i] = string[i];
       
       if (string[i] == "X" || string[i] == "x") {
           player_1_moves.push(i);
       } else if (string[i] == "O" || string[i] == "o") {
           player_2_moves.push(i);
       }
    }
    
    console.log("String of pos: " + position);
    console.log("Player 1 moves: " + player_1_moves);
    console.log("Player 2 moves: " + player_2_moves);
    
}


function displayBoard() {
    
    let row_1 = position[0] + " | " + position[1] + " | " + position[2];
    let row_2 = position[3] + " | " + position[4] + " | " + position[5];
    let row_3 = position[6] + " | " + position[7] + " | " + position[8];

    for (let i = 1; i < 2; i++) {
     
        console.log(row_1);
        console.log(vertical);
        console.log(row_2);
        console.log(vertical);
        console.log(row_3);
    }
    
}


    let boardPlaces = ["X", "O", "X", "X", "X", "O", "O", "O", "X"];
    importBoard(boardPlaces);
   
    let move = isValidMove(1);

    displayBoard();
    
    wins(player_1_moves);
    wins(player_2_moves);
    
    console.log(winningPositions[1]);
    
   