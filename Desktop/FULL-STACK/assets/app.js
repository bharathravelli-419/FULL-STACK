var head = document.getElementById('heading')
head.innerHTML="changed"
var paragraph= document.getElementsByClassName('para')
console.log(head)
console.log(paragraph.length)
console.log(typeof head)


var tags  = document.getElementsByTagName('body')
console.log(tags[0])
var query = document.querySelector('.para')
console.log( query)
head.style="color:red;background-color:yellow;font-size:2rem"
var query1 = document.querySelector('body')
query1.classList.add('dark')
console.log(head.innerHTML)

var list= document.querySelector('ol')
var arr =['go to gym','cook oatmeal','eat']
  for(var i =0;i<arr.length;i++)
{
    var element = document.createElement('li')
    var textnode =document.createTextNode(arr[i])
     element.appendChild(textnode)
     list.appendChild(element)
}