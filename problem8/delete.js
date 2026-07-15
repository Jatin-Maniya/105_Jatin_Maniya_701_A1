const fs = require("fs")

const path = require("path")

const folderPath = path.join(__dirname,"temp")

if(fs.existsSync(folderPath)) {
    fs.rmSync(folderPath,{recursive:true,force:true})
    console.log('Deleted folder successfully.')
}else{
    console.log('No "temp" folder found. Nothing to Delete.');
}