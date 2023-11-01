// // function countDown(count){
// //     console.log(count);
// //     if(count==0){
// //         return;
// //     }
// //     setTimeout(()=>{countDown(count-1)},1000);
// // }
// // countDown(5)

// // function factorial(n) {
// //     // invalid case
// //     if (n < 0) {
// //     return 'Factorial of negative number is not possible';
// //     }
// //     // base case
// //     else if (n === 1 || n === 0) {
// //     return 1;
// //     }
// //     return n * factorial(n - 1);
// //    }
// //    console.log(factorial(5)); // Output?
// //    console.log(factorial(-2)); // Output?

// function reverseNum(num) {
//     let reverse = 0;
//     while(num != 0)
//     {
//     reverse = reverse * 10;
//     reverse = reverse + num%10;
//     num = Math.trunc(num/10); // Remove decimal places
//     }
//     return reverse;
//    }
//    console.log(reverseNum(123)) //321
//    console.log(reverseNum(5872)) //278

---cancelIdleCallback
const arr = [1,2,3,4,5,6,7,8,9,10]

const filter Function = (arr,callback)=>{
    const filteredArr = [];
    for(let i=0;i<arr.length; i++)
    
}