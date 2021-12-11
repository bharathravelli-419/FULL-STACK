const ul = document.querySelector('ul')
const but = document.querySelector('button')
const getText = document.querySelector('input')
const parent = document.querySelector('div.grid')

const getData =async (item)=>{
   const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`

   console.log(item)
   
   console.log(url)
   const res=await fetch(url)
   const data = await res.json()
   const recipies=data.hits
   console.log(recipies)
   recipies.forEach(item=>{
       console.log("bharath")
       console.log(item)



       const template=`
   <article class="card">
            <img class="card__image" src="https://i.ibb.co/RT0bjJq/food1.png" />
            <div class="card__data">
              <div class="card__info">
                <h2>Nombre Comida</h2>
                <p>Descripcion de la comida, con ingredientes</p>
              </div>
              <h3 class="card__price">$7.50</h3>
              <button class="card__add">+</button>
            </div>
          </article>
   
   
   
   
   
   
   
   `
  const newCard = document.createElement('article')
  newCard.setAttribute('class','card')
  newCard.innerHTML=template
  parent.appendChild(newCard)

   })

}





but.addEventListener('click',(e)=>
{
    getData(getText.value)
})