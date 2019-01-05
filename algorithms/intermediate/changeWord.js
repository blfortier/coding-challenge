
// A function that returns the number of steps required
// to change the first word into the second word
// Passed 2 strings and an int that represents
// how long each word is
function wordChange(text1, text2, length) {

    // Assign the 2 strings being passed in
    // to variables
    let word1 = text1;
    let word2 = text2;
    
    // Assign the length parameter being passed
    let len = length;
    
    // Initialize 2 arrays that will hold the
    // ASCII values of each char in the strings
    let arrIndex1 = [];
    let arrIndex2 = [];
    
    // An array to hold the difference (number of steps)
    // that is required to change the first string into
    // the second string
    let diffArr = [];

    // For each letter in len
    for(let i = 0; i < len; i++) {
        // Fill the arrays with ASCII values
        arrIndex1[i] = word1.charCodeAt(i);
        arrIndex2[i] = word2.charCodeAt(i);
        
        // Get the difference of ASCII values
        // and fill the diffArr with them
        diffArr[i] = arrIndex2[i] - arrIndex1[i]; 
    }
    
    // Sum the number of steps required in total
    let sum = diffArr.reduce(function(a, b) {
        return a + b
    });
    
    // Special case: If the value of the difference in ASCII 
    // values is 1 and -1, the total will be 0. Such as, if the
    // function was passed "ab" and "ba". This would be wrong since
    // you really need to complete 2 steps in order to change "ab" to "ba"
    if (len == 2) {
        if (diffArr[0] == 1 || diffArr[0 == -1] && diffArr[1] == 1 || diffArr[1] == -1) {
                return 2;
        } else {
            return sum;
    
        }
   
    } else {
        // Return the number of steps as positive number
        return Math.abs(sum);
    }

}


let result = wordChange("this", "that", 4);
console.log("The total change score is: " + result);