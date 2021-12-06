var arr =['go to gym','eat','bath','go to college']

var callback=(bharathravelli,ds)=>
{
    console.log(bharathravelli,ds)
}
arr.forEach(callback)
arr.forEach((element,index)=>console.log(element,index))
button = document.querySelector('button')
input = document.querySelector('input')
list = document.querySelector('ul')
  const callbackfunc=(event)=>
  {
    console.log('fsd')
    console.log(event.target)
    console.log(event)
    console.log(input.value)
    var inputvalue = input.value
     const element = document.createElement('li')
     const textnode = document.createTextNode(inputvalue)
      element.appendChild(textnode)
      list.appendChild(element)
  }
  button.addEventListener('click',callbackfunc)