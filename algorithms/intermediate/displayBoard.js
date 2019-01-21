
let vertical = "--"  + "+" + "--"  + "-" + "+" + "--";

let position = [0, 1, 2, 3, 4, 5, 6, 7, 8];

for(let i = 0; i < 9; i++) {
    position[i] = " ";
}


const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


/*rl.question('Player one, would you like to be X\'s or O\'s? ', (answer) => {
      console.log(`You said: ${answer}`);
      player_1 = answer;

  rl.close();
});

*/

function placeOnBoard(placement, player) {
    
   let mark = (player == 1) ? 'X' : 'O';
   
   switch(placement) {
        case 0:
           if(position[0] == " ") {
               position[0] = mark;
           }
           break;
        case 1:
            if(position[1] == " ") {
               position[1] = mark;
           }
           break;
        case 2:
            if(position[2] == " ") {
               position[2] = mark;
           }
           break;
        case 3:
            if(position[3] == " ") {
               position[3] = mark;
           }
           break;
        case 4:
            if(position[4] == " ") {
               position[4] = mark;
           }
           break;
        case 5:
            if(position[5] == " ") {
               position[5] = mark;
           }
           break;
        case 6:
            if(position[6] == " ") {
               position[6] = mark;
           }
           break;
        case 7:
            if(position[7] == " ") {
               position[7] = mark;
           }
           break;
        case 8:
            if(position[8] == " ") {
               position[8] = mark;
           }
           break;
   }
   
   
   
   
}



function display() {
    
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


/*function make_move(spot) {
    let player_1 = "X";
    let player_2 = "O";
    
    
    position[spot] = player_1;
    
    //console.log("pos " + position[4]);
    
}   */
    placeOnBoard(1, 1);
    placeOnBoard(3, 2);
    placeOnBoard(5, 1);
    placeOnBoard(2, 2);
    placeOnBoard(1, 1);
    placeOnBoard(8, 2);
    placeOnBoard(0, 1);
    placeOnBoard(7, 2);

    
    display();
    
   /* placeOnBoard(3, player_1);
    display();
   */
    