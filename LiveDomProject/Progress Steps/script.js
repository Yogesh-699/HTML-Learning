// const progress =document.getElementByClassName('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')
console.log(circles.length)

let currentActive = 1

next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>circle.length){
        currentActive=circle.length
    }
    update()
})

function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
}