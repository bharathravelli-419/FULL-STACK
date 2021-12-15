const input = document.querySelector('input')
const plusbutton = document.querySelector('div.plusbutton')
const ALL = document.querySelector('div.item321')
const big = document.querySelector('div.big')
const item31 = document.querySelector('div.item31')


const ALLarray=[]
const Pendingarray=[]
const Completedarray=[]
plusbutton.addEventListener('click',(event)=>{
    if (ALLarray.includes(input.value) === true) {
        alert("already exsits")
    }
        else{
          ALLarray.push(input.value)
          const length = ALLarray.length
          
         
          item31.innerHTML= "items "+ length 
        }

         
})
ALL.addEventListener('click',()=>{
    ALLarray.forEach((bharath,index)=>{
        const element = document.createElement('div')
    element.setAttribute('class','listitems')

    const element1= document.createElement('div')
         element1.setAttribute('class','checkbox')
    
    const element2 = document.createElement('div')
         element2.setAttribute('class','textInput')
         element2.innerHTML=bharath;

     const template =`
     <div class = "checkbox">

     </div>
     <div class = "textInput">
      ${bharath}
     </div>
     <div class="crossmark" >
       X
     </div>   

     `
     
  const element3= document.createElement('div')
    element3.setAttribute('class','listitems')
    element3.innerHTML=template
    console.log(element3)
   
    big.appendChild(element3)
    
    })
})
const checkbox = document.querySelector('div.checkbox')
checkbox.addEventListener('click',(event)=>{
    event.classList.toggle('red')
})
const crossmark = document.querySelector('div.crossmark')
