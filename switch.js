// S W I T C H  S T A T E M E N T

// Okey let's see the statement switch. Imagin you want to check if the variable grade  are A or B 
// or C or D. You can make an if continued by else if for all the posibilities, but this is to 
// cumbersome. Instead of this you can use the switch statement, this statement is going around
// veryfing the cases. Its important put the break after any case if you dont want to see all of the 
// cases after the case you're searching.
let grade='D'

switch(grade){
    case 'A':
        console.log("You're grade is A");
        break;
        case 'B':
        console.log("You're grade is B");
        break;
        case 'C':
        console.log("You're grade is C");
        break;
        case 'D':
        console.log("You're grade is D");
        break;
        case 'E':
        console.log("You're grade is E");
        break;
        default:
        console.log("That's not a grade");
        break;
}


// If in any case are the value you're searching the switch  shows you the default case.
let grade2='F'
switch(grade2){
    case 'A':
        console.log("You're grade is A");
        break;
        case 'B':
        console.log("You're grade is B");
        break;
        case 'C':
        console.log("You're grade is C");
        break;
        case 'D':
        console.log("You're grade is D");
        break;
        case 'E':
        console.log("You're grade is E");
        break;
        default:
        console.log("That's not a grade");
        break;
}