// const array1= ['a','b','c']
// const array2= ['d','e','f']
// const array3 = array1.concat(array2);

// console.log(array3);

// const animals = ['pigs','goats','sheep'];

// const count = animals.push('cows');
// console.log(count);
// console.log(animals);
// animals.push('chickens','cats','dogs');
// console.log(animals);

// const array1 = [1,2,3];
// console.log(array1.unshift(4,5));
// console.log(array1);

// const plants = ['brocoli','cauliflower','cabbage','kale','tomato'];
// console.log(plants.pop());

// console.log(plants);
// plants.pop();
// console.log(plants);

// const array1 = [1,2,3]
// const firstElement = array1.shift();
// console.log(array1);
// console.log(firstElement);

// const array1 = [5,12,8,130,44];
// const found = array1.find(element => element > 10);
// console.log(found);

// const array1 = [5,12,8,130,44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1,30,39,29,10,13];
// console.log(array1.every(isBelowThreshold));

// const array = [1,2,3,4,5];
// const even = (element) => element % 2 ===0;
// console.log(array.some(even))

// const elements = ['fire','Air','Water'];
// console.log(elements.join());

// console.log(elements.join(''));

// console.log(elements.join('-'));

// const array1 = [1,2,3];

// console.log(array1.includes(2));

// const pets = ['cat','dog','bat'];

// console.log(pets.includes('cat'));

// console.log(pets.includes('at'));

// console.log(pets.includes('dog'))

// const array1 = ['one','two','three'];
// console.log('array1:', array1);

// const reversed = array1.reverse();
// console.log('reversed:',reversed);

// console.log('array1:',array1);

// const array1 = [1,4,9,16];
// const map1 = array1.map(x => x * 3);
// console.log(map1);

// const words = ['spray','limit','elite','exuberant','destruction','present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// let dailyActivities = ['eat','sleep'];
// dailyActivities.push('exercise');
// console.log(dailyActivities);

// let dailyActivities = ['work','eat','sleep','exercise'];

// dailyActivities.pop();
// console.log(dailyActivities);

// const removedElement =dailyActivities.pop();

// console.log(removedElement);
// console.log(dailyActivities)

// let dailyActivities = ['sleep','work','excercise']
// let newRoutine = ['eat'];

// dailyActivities.sort();
// console.log(dailyActivities);

// const position = dailyActivities.indexOf('work')
// console.log(position);

// const newDailyActivities = dailyActivities.slice(1);
// console.log(newDailyActivities);

// const routine = dailyActivities.concat(newRoutine);
// console.log(routine);


// let arr = ['h','e'];
// let arr1 = arr;
// arr1.push('1')

// console.log(arr);
// console.log(arr1);

////Assignment median//

// var fruits = ['Apple','Banana'];
// console.log(fruits)

//methond2
// var msgArray = [];
// msgArray[0] = 'Hello';
// console.log(msgArray)

//method3
// var array = new Array('Hello');
// console.log(array)

///method1-slice method

// var array = [1,2,3,4,5,6];
// var result = array.slice();

// console.log(array);
// console.log(result);

//method2

// var array = [1,2,3,4,5,6];
// var array2=[];

// for (i = 0; i<array.length; ++i){
//     array2[i] = array[i];
// }
// console.log (array2);

//3 filter the array to return just the dogs

var animals = [

    {name:"Jason",species:"rabbit"},
    {name:"=Jessica",species:"dog"},
    {name:"Jacky",species:"owl"},
    {name:"Luke",species:"fish"},
    {name:"Junior",species:"rat"},
    {name:"Thomas",species:"cat"}
]
var dogs = animals.filter(function(animals){
    return animals.species === "dog";
});
console.log(dogs);

Returns

[ { name: 'Jessica', species:'dog' } ]

///using array in question 4 use map function to return all the species

var types = animals.map(function(animals){
    return animals.species;
});
console.log(types);

var types = animals.map(function(animals){
    return animals.species;
});
console.log(types);

// Q=1

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

// var numberToCheck = 7;
// var result = checkEvenOrOdd(numberToCheck);
// console.log(numberToCheck + " is " + result);

// Q=2

// function addNumbers(num1, num2) {
//     return num1 + num2;
//   }

// var number1 = 5;
// var number2 = 7;
// var sum = addNumbers(number1, number2);
// console.log("The sum of " + number1 + " and " + number2 + " is " + sum);


//Q=3

// function findSquareRoot(number) {
//     return Math.sqrt(number);
//   }

// var inputNumber = 25; // Replace with the number for which you want to find the square root
// var squareRoot = findSquareRoot(inputNumber);
// console.log("The square root of " + inputNumber + " is " + squareRoot);

//Q=4

// var a = 5;
// var b = 10;

// console.log("Before swapping:");
// console.log("a =", a);
// console.log("b =", b);

// // Swap the values
// var temp = a;
// a = b;
// b = temp;

// console.log("After swapping:");
// console.log("a =", a);
// console.log("b =", b);



// Q=5

// var num1 = 25;
// var num2 = 17;
// var num3 = 42;

// // Find the largest number
// if (num1 >= num2 && num1 >= num3) {
//   console.log(num1 + " is the largest number.");
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log(num2 + " is the largest number.");
// } else {
//   console.log(num3 + " is the largest number.");
// }
