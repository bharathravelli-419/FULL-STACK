var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores =[]
const callbackfunc =(event)=>{
    const inputValue = input.value
    if(chores.includes(inputValue))
    {
        console.log("already exists")
    }
    else{
        chores.push(inputValue)
        const element = document.createElement('li')
        const textNode = document.createTextNode(inputValue)
        element.appendChild(textNode)
         list.appendChild(element)
        element.addEventListener('click',(e)=>{
            e.target.remove()
        })
    }
}

button.addEventListener('click',callbackfunc)