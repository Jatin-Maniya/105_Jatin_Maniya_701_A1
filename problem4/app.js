const fs = require("fs")
const archiver = require("archiver")

const output = fs.createWriteStream("myFolder.zip")

const archive = archiver("zip",{
    zlib:{level:9} // Maximum Compression
})

output.on("close",()=>{
    console.log("Zip File Created Successfully!")
    console.log("Total Size : ",archive.pointer(),"bytes")
})

archive.on("err",(err)=>{
    throw err
})

archive.pipe(output)

archive.directory("myFolder/",false)

archive.finalize()
