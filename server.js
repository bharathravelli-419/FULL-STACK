const http = require('http')
console.log(http)
//creating the fs module to Read from the file
const fs = require('fs')
const path = require('path')
// creation of the server using HTTP moudule
const server = http.createServer((request,response)=>{
    //console.log(request.headers)
    // console.log(request.url)
   // console.log(request.method) 
 //  const path = request.url
  //  response.write(`You made a request to ${path}`)

  const markup = fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    response.end()
})
console.log(server)
//creation of the port numbers using the Listen method in Server module
server.listen(3000,()=>{
    console.log(`Server listening at PORT :${3000}`)
})