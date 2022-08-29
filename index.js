let ages = [3, 9, 23, 64, 2, 8, 28, 93];

var lastElement = ages[ages.length -1];
var firstElement = ages[0];

var result = (lastElement - firstElement);
console.log(result);

ages.push(27);

var lastElement = ages[ages.length -1];
var firstElement = ages[0];

var secondResult = (lastElement - firstElement);
console.log(secondResult);

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum);

let avg = (sum / ages.length);
console.log(avg);




let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths)

let sumTwo = lengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sumTwo);

let avgTwo = (sumTwo / names.length);
console.log(avgTwo);

console.log(names.join(' '));


let nameLengths = [];

let lengthsTwo = names.map(function(element) {
    return element.length;
});
console.log(lengthsTwo);

nameLengths.push(...lengthsTwo);
console.log(nameLengths);

let sumThree = 0
for (let i = 0; i < lengthsTwo.length; i++) {
    sumThree += nameLengths[i];
}
console.log(sumThree);






function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var fullName = createFullName('Tia', 'Matheu');
console.log(fullName);


let lotteryNumbers = [2, 11, 17, 23, 48];

let sumFour = lotteryNumbers.reduce(function(accumulator, currentValue) {
    if (accumulator + currentValue > 100); {
        return true;
    }
});
console.log(sumFour);



var total = 0;
for (var i = 0; i < lotteryNumbers.length; i++) {
    total += lotteryNumbers [i];
}
var avgThree = total / lotteryNumbers.length;
console.log(avgThree);




let oddNumbers = [7, 11, 25, 41, 89];
let evenNumbers = [2, 8, 22, 54, 78];

var total = 0;
for (var i = 0; i < oddNumbers.length; i++) {
    total += oddNumbers [i];
}
var avgFour = total / oddNumbers.length;
console.log(avgFour);


var total = 0;
for (var i = 0; i < evenNumbers.length; i++) {
    total += evenNumbers [i];
}
var avgFive = total / evenNumbers.length;
console.log(avgFive);




function findGreaterAverage(avgFour, avgFive) {
    if (avgFour > avgFive) {
        return true;
    } else {
        return false;
    }
}
console.log(findGreaterAverage);


var isHotOutside = true;
var moneyInPocket = 11.12;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    }
}    
console.log(willBuyDrink);



function createPokemonType(typeOne, typeTwo) {
    console.log(typeOne + ' ' + typeTwo);
}
createPokemonType('Steel', 'Fairy');
createPokemonType('Ghost', 'Dark');

