// function sayHello() {
//     console.log('Hello')
// }

// sayHello();

// function sayHi(Name){
//     console.log('Hi',Name);
// }

// const myName = 'Primathon';

// sayHi(myName);
// sayHi('Primathon');
// sayHi('1234567');
// sayHi();

// function sayHiAdvance(name,age) {
//     console.log('Hi',name,'you are',age,'year old');
// }

// sayHiAdvance();
// sayHiAdvance(23);
// sayHiAdvance(23,'Primathon');
// sayHiAdvance('Primathon',23);

// const temp = sayHiAdvance('Primathon',23);

// function sayHelloAdvance(){
//     return 'Hello'
// }
// sayHelloAdvance()
// console.log(sayHelloAdvance())
// const hello = sayHelloAdvance();
// console.log(hello);

// function sayHelloAdvanceAdvance(name) {
//     return 'Hello ' + name;
//    }
//    console.log(sayHelloAdvanceAdvance()); // Hello undefined
//    const helloThere = sayHelloAdvanceAdvance('Primathon');
//    console.log(helloThere); 

// function printPattern1(n) {
//     console.log('For n = ', n);
//     for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//     process.stdout.write('* ');
//     }
//     console.log();
//     }
//    }
//    printPattern1(1);
//    printPattern1(2);
//    printPattern1(3);
//    printPattern1(4);
//    printPattern1(5);
 
// function add(a, b) {
//     console.log(arguments, "arguments"); // What is this?
//     console.log("b = ", b, ", a = ", a); // b = 20, a = 10
//     console.log("b = ", a, ", a = ", b); // b = 10, a = 20
//     return a + b;
//    }
//    let result1 = add(10, 20);
//    console.log(result1);
//    result1 = add("10", 20);
//    console.log(result1);
//    result1 = add(10, "20");
//    console.log(result1);
//    result1 = add(10, 20, 30);
//    console.log(result1);
//    let sum = add; // What is this?
//    let result2 = sum(10, 20);
//    console.log(result2);


// function add2() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//     }
//     return sum;
//    }
//    console.log(add2(1, 2)); // 3
//    console.log(add2(1, 2, 3, 4, 5)); // 15

// function average(a, b, fn) {
//     return fn(a, b) / 2;
//    }
//    let result3 = average(10, 20, sum);
//    console.log(result3); // 15

// function cmToIn(length) {
//     return length / 2.54;
//    }
//    function intoCm(length) {
//     return length * 2.54;
//    }
//    function convert(fn, length) {
//     return fn(length);
//    }
//    // Convert to inches
//    let inches = convert(cmToIn, 10);
//    console.log(inches);
  
//    let cm = convert(intoCm, 10);
//    console.log(cm);

//    let cm2 = convert(cmToIn, convert(intoCm, 10));
//    console.log(cm3);
   