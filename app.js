var button = document.querySelector('button')
var body = document.querySelector('body')

const callback =(event)=>{
         body.classList.toggle('dark')   
}

button.addEventListener('click',callback)