// Given a number, you have to use a switch statement to return "One" if the given number is equal to 1, "Two" if the number is 2 and so on till 9 ("Nine") else return "Unknown"(without quotes). 


function exampleForSwitch(num){
switch (num){
    case 1:
        return "One";
        break;      
    case 2:             
        return "Two";
        break;

    case 3:
        return "Three";
        break;

    case 4:
        return "Four";
        break;
        case 5: 
        return "Five";
        break;
        case 6:
        return "Six";   
        break;
        case 7:
        return "Seven";
        break;
        case 8:
        return "Eight";
        break;
        case 9:
        return "Nine";
        break;
        default:
        return "Unknown";
        break;
}
}

console.log(exampleForSwitch(1)); // One
console.log(exampleForSwitch(2)); // Two    