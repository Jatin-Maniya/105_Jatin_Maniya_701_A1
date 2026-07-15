const http = require("http")

const PORT = 8000

const server = http.createServer(async(req,res)=>{
    if(req.url === "/google") {
        try {
            const response = await fetch("https://www.google.com")

            const data = await response.text()

            res.writeHead(response.status,{"content-type":"text/plain"})
            res.end(data)
        } catch (error) {
            console.log(error)
            res.writeHead(500, { "content-type": "text/plain" })
            res.end("Internal Server Error")
        }
    }else {
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("No Page Found")
    }
}).listen(PORT,()=>{
    console.log(`Server is Listening on port number : ${PORT}`)
})