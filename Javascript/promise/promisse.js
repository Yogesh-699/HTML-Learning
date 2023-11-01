const count = false;
let countValue = new Promise(function (reject,resolve) {
 if (count) {
 resolve("There is a count value.");
 } else {
 reject("There is no count value");
 }
});
console.log(countValue);
