// function sum (a,b){
//     return a+b
// }

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

//    //convert to cms
//    let cm = convert (intoCm,10);
//    console.log(cm)

//    let cm2 = convert(cmToIn, convert(intoCm, 10));
// // Explanations
// // convert(cmToIn, 25.4); => 25.4 / 2.54 => 10
// console.log(cm2); // 10


// let cm3 = convert(cmToIn, convert(intoCm, convert(intoCm, 10)));
// // Explanations
// // let cm3 = convert(cmToIn, convert(intoCm, 25.4));
// // let cm3 = convert(cmToIn, 64.516);
// // let cm3 = 25.4;
// console.log(cm3); // 25.4



// function sumRange1(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//     sum += i;
//     }
//     return sum;
//    }
//    console.log(sumRange1(10));

//    function sumRange2(n) {
//     return (n * (n + 1)) / 2;
//    }

//    console.log(sumRange2(10));
   
//    function sumRange3(n) {
//     let sum = 0;
//     for (let i = n; i >= 1; i--) {
//     sum += i;
//     }
//     return sum;
//    }

//    console.log(sumRange3(10));


// function sumRange4(n) {
//     // base case
//     if (n === 1) {
//     return 1;
//     }
//     return n + sumRange4(n - 1);
//    }
//    const result = sumRange4(5);
//    console.log(result)


// // 1. Function Declaration
// function square(x) {
//     return x * x;
//    }
//    // 2. Function Expression
//    const square = function (x) {
//     return x * x;
//    };
   // 3. Arrow Function Expression
   const square = (x) => {
    return x * x;
   };
//    // 4. Concise Arrow Function Expression
//    const square = (x) => x * x

console.log(square(10))
   

