const express = require("express")
const path = require("path")

const app = express()
const PORT = 8000

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/gethello",(req,res)=>{
    res.send("Hello NodeJS!!")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port number : ${PORT}`)
})