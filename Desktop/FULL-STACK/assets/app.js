const table = document.querySelector('table')
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>{return res.json()}).then(data=>{ console.log(data)

data.forEach(user =>{
   let newRow = document.createElement('tr')
   let element = `
   <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.username}</td>`

       newRow.innerHTML=element
       table.appendChild(newRow)
})    
})




