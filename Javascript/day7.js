// let x = 5 //global scope
// let y = 30
// function abc(){
//     let x=10 //local scope
//     {
//         let x=20 //block scope
//         console.log(y)
//     }
// }

// abc()

// var x=1
// function abc()
// {
//     var x=2
//     console.log(x)
// }
// abc()
// console.log(x)

//------------------//
x=1
function abc(){
        console.log(x)
    {
        console.log(x)
        {
            var x =3
            console.log(x)
        }
    }
    console.log(x)
}

abc()

console.log(x)

