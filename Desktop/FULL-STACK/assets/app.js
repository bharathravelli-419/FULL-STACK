let response = fetch('https://jsonplaceholder.typicode.com/users').then(res =>{
let par = res.json()
return par
}).then( data => {console.log(data)

    const callback= (element,index)=>{
        console.log(element.id,element.name,element.email)
    }
    data.forEach(callback)

})
