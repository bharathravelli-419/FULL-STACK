/*const http = require('http')
console.log(http)
//creating the fs module to Read from the file
const fs = require('fs')
const path = require('path')
// creation of the server using HTTP moudule
const server = http.createServer((request,response)=>{
  const {url} = request
  if(url =="/login")
  {
    response.write(`<h1>LOGIN PAGE</h1>`)
    response.end()
  }
  if(url == '/signup')
  {
    response.write(`<h1>SIGNUP PAGE </h1>`)
    response.end()
  }

})
console.log(server)
//creation of the port numbers using the Listen method in Server module
server.listen(3000,()=>{
    console.log(`Server listening at PORT :${3000}`)
})
*/
const data = [{name:"bharath"},{name:"Sai Tharun"},{name:'Sai krishna'}]





const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  console.log(req.url)
  res.send("this is response from the server created by express")
})
app.get('/login',(req,res)=>{
  console.log(req.url)
  res.send("this is a login page")
})
app.get('/signup',(req,res)=>{
  console.log(req.url)
  res.send("this is the signup page")
})
app.get('/getnames',(req,res)=>{
  res.send(data)
})


app.listen(3000,()=>{
  console.log('server listening at port 3000')
})