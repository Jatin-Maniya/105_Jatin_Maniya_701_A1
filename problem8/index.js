const http = require("http")

const PORT = 8000

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end('Hello! This server is running via "npm start" \n')
}).listen(PORT,()=>{
    console.log(`Server is Listening on port number : ${PORT}`)
})

