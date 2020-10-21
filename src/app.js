var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count > 0){
        for(let i=0;i<chocolates.length;i++){
            chocolates.unshift(color);
        }
    }
    else{
        return 'Number cannot be zero/negative'
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    let arr = []
    for(let i=0;i<number;i++){
        arr[i] = chocolates.shift();
    }
    return arr;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    let arr = []
    for(let i=0;i<number;i++){
        arr[i] = chocolates.pop();
    }
    return arr;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    let arr=[];
    let count=0;
    for(let i=0;i<chocolates.length;i++) {
        if(chocolates[i] == color){
            count++;
            chocolates.splice(i,1);
            arr.push(chocolates[i]);
        }
        if(count == number){
            break;
        }   
    }
    return arr;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
let input = ["green", "silver", "blue", "crimson", "purple","red", "pink"];
function noOfChocolates(input){
    let arr=[];
    for(let i=0;i<input.length;i++){
    let filteredArray = chocolates.filter(function(chocolate,index){
        return chocolate == input[i]
    });
    arr.push(filteredArray.length);
    }
    return arr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(){
    let chocolateArray = noOfChocolates(input);
    chocolateArray.sort(function(a,b){
        return b - a;
    });
    return chocolateArray;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
    let count = 0;
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i] == color){
            count++;
            chocolates.splice(i,1,finalColor);
        }
        if(count == number){
            break;
        }
    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i] == color){
            chocolates.splice(i,1,finalColor);
        }
    }
    return chocolates;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
