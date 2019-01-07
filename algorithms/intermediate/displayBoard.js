let vertical = " " + "--" + "--" + "+" + "--" + "--" + "--" + "+" + "--" + "--";
let horizontal = "     " + "|" + "      " + "|";

function display() {
    
    let i, j, k;
    
    for (i = 1; i < 2; i++) {
        console.log(horizontal);
        
        for(j = 0; j < 2; j++) {
            console.log(horizontal);
            console.log(vertical);
            console.log(horizontal);

        }
        
         console.log(horizontal);
    }
}

display();