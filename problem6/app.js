const readline = require("readline")
const fs = require("fs")
const path = require("path")

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

r1.question("Enter the Path of the file to delete : ",async(filepath)=>{
    const fullPath = path.resolve(filepath.trim())

    try{
        fs.stat(fullPath, (err, stat) => {
            if (err) throw err;

            if (stat.isDirectory()) {
                fs.rm(fullPath, { recursive: true, force: true }, (err) => {
                    if (err) throw err;
                    console.log("Directory Deleted : ",fullPath);
                });
            } else {
                fs.unlink(fullPath, (err) => {
                    if (err) throw err;
                    console.log("File Deleted : ",fullPath);
                });
            }
        });
    }catch(err) {
        console.log("Error : ",err.message)
    }
    finally{
        r1.close();
    }
})