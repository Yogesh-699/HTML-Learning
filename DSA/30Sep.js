//Program to Check if a number is Positive, Negative, or Zero

function checkNumber(number){
    if(number > 0) {
        console.log(number + "is a positive number.");
    } else if (number < 0) {
        console.log(number + "is a negative number.");
    }else{
        console.log(number + "is zero.");
    }
}

    var testNumber = 15;
    checkNumber(testNumber);

