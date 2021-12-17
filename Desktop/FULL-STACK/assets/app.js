const ul =document.querySelector('ul')
const button = document.querySelector('button')
const parent = document.querySelector('div.grid')
const input = document.querySelector('input')

const getData = async (item)=>{
  console.log(item)
  const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  const recipies = data.hits
   recipies.forEach(item=>{
     console.log(item)
     const {recipe} = item
    const {label,image,source,calories} = recipe
      const template =`
      
      
      <article class="card">
            <img class="card__image" src="${image}" />
            <div class="card__data">
              <div class="card__info">
                <h2>${label}</h2>
                <p>From ${source}</p>
              </div>
              <h3 class="card__price">${calories.toFixed(2)}</h3>
              <button class="card__add">+</button>
            </div>
          </article>
      
      
      `
      const newCard = document.createElement('article')
      newCard.setAttribute('class','card')
      newCard.setAttribute('style','margin-bottom:50px')
       newCard.innerHTML= template
       parent.appendChild(newCard)





   })

}

document.addEventListener('keyup',(e)=>{
   if(e.keyCode==13)
   getData(input.value)
})



/*
// destructuring in javaScript
const person={
name:"bharath",
age :19

}
console.log(`My Name is ${person.name} and age is ${person.age}`)
const{ name,age} = person
console.log(name,age)
*/