const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply= document.querySelector('#multiply')
const resultbox = document.querySelector('.result')
console.log(a,b)

/*
const sum=()=>{
    const result= parseInt(a.value)+parseInt(b.value)
    resultbox.innerHTML= result
}
add.addEventListener('click',sum)
const product=()=>{
    const result= parseInt(a.value)*parseInt(b.value)
    resultbox.innerHTML= result
}
multiply.addEventListener('click',product)

 */
const calculate =(event,operator)=>{
    console.log(event.target + operator)
}
add.addEventListener('click',(event)=>{
    calculate(event,'add')
})
multiply.addEventListener('click',(event)=>{
    calculate(event,'multiply')
})
