let value = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('hello')
        
    }, 3000);
})

console.log(value)
setTimeout(()=>{
 console.log(value)
},4000)