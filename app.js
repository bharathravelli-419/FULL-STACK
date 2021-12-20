const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
div.innerHTML= localStorage.getItem('inputValue')
const arr = [1,2,3,4,5,"bharath ravelli 419"]

console.log(JSON.stringify(arr))
localStorage.setItem('KEY',JSON.stringify(arr))
 console.log(JSON.parse(localStorage.getItem('KEY')))








/*
document.addEventListener('keyup',(req,res)=>{
    if(event.keyCode ==13)
    {
        localStorage.setItem('inputValue',[1,2,3,4,5])
           div.innerHTML=input.value
    }
})

*/