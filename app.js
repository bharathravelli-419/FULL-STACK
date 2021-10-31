var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

const callback =(event)=>{
    const inputValue=input.value
    const element=document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
    console.log(event.target)
    console.log(input.value)
}

button.addEventListener('click',callback)