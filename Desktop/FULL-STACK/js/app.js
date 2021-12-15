// SELECTING THE ELEMENTS
const clear = document.querySelector(".clear")

const dateElement = document.getElementById("date")

const list = document.getElementById("list")

const input = document.getElementById("input")

const body = document.getElementById('body')

const mode = document.querySelector("div.Mode")

const ARRAY =[]

//CLSSES NAMES

const CHECK ="fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

//VARIABLES

var LIST =[]

let id =0

// FOR DARK MODE ENABLING
mode.addEventListener('click',()=>{
  mode.classList.toggle('.dark')
})



// GET ITEM FROM LOCAL STORAGE
let data = localStorage.getItem("TODO")
if(data){
    LIST=JSON.parse(data)
   
    id = LIST.length // set the id to the last one in the list
    loadToDo(LIST)   // load the list to the other user interface
}
else{
    LIST=[]
    id =0
}

// LOAD ITEMS TO THE USER INTERFACE

function loadToDo(array)
{
  
    array.forEach((item)=>{
               addToDo(item.name,item.id,item.done,  )
    })
        
    
}

// TO CLEAR THE LOCAL STORAGE

clear.addEventListener('click',()=>{
    localStorage.clear()
    location.reload()
})



// SHOW TODAY DATE
let options ={weekday:'long',month:'short',day:'numeric'}

let today = new Date()
dateElement.innerHTML= today.toLocaleDateString("en-US",options)



// ADD TO DO FUNCTION



function addToDo(toDo,id,done,trash){

if(trash){ return}

const DONE = done ? CHECK :UNCHECK
const LINE = done ? LINE_THROUGH : "" 

    const text=`
    <li class="item">
    <i class= "fa ${DONE} co"job="complete" id ="${id}"></i>
    <p class="text  ${LINE} ">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id ="${id}"></i>
    </li>
    `
    const position ="beforeend"
    list.insertAdjacentHTML(position,text)
}


//ADD ITEM TO THE LIST USER THE ENTER KEY


document.addEventListener("keyup",(event)=>{

    if(event.keyCode == 13)
    {
        if(ARRAY.includes(input.value))
           { window.alert("already exists") }
         else{
             ARRAY.push(input.value)
          
        const toDo = input.value

        if(toDo)
        {
            addToDo(toDo,id,false,false)
            LIST.push(
                 {
                     name:toDo,
                     id :id,
                     done:false,
                     trash:false
                 }
            )
            // add this item to local storage (this code must be added wherever LIST ARRAY IS UPDATED)
             localStorage.setItem("TODO",JSON.stringify(LIST))
         
            
            id++
        
        }
        input.value=""
  
    }
    }
})


// COMPLETE TO DO 


function completeToDo(element){
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)
    LIST[element.id].done =LIST[element.id].done ? false : true
}

// REMOVE TO DO 


function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true
    
    
}


// TARGET ITEMS CREATED DYNAMICALLY

list.addEventListener('click',(event)=>{
   let element = event.target
    const elementJOB= element.attributes.job.value
     if(elementJOB == "complete")
         {
             completeToDo(element)

         }else if(elementJOB == "delete")
         {
             removeToDo(element)
             ARRAY.remove(element.attributes.p.value)

         }

         // add this item to local storage (this code must be added wherever LIST ARRAY IS UPDATED)
           localStorage.setItem("TODO",JSON.stringify(LIST))
})
console.log(ARRAY)