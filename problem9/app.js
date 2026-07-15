const fs = require("fs")

// creating and writing data to a file
fs.writeFile("sample.txt","\nHello, Node.js!",(err)=>{
    if(err) {
        throw err
    }
    console.log("File Created Successfully!!")

    // Reading the File
    fs.readFile("sample.txt","utf-8",(err,data)=>{
        if(err) {
            throw err
        }
        console.log("File Content : ",data)

            // Append the Data to the File
        fs.appendFile("sample.txt","\nThis line was appended",(err)=>{
            if(err) {
                throw err
            }
            console.log("Data Appended Successfully!!")

            // rename the file
            fs.rename("sample.txt","newSample.txt",(err)=>{
                if(err) {
                    throw err
                }
                console.log("File renamed Successfully!!")

                // get file information
                fs.stat("newSample.txt",(err,stats)=>{
                    if(err) {
                        throw err
                    }
                    console.log("File Size : ",stats.size,"bytes")

                    
                    // check if file exists
                    fs.access("newSample.txt",fs.constants.F_OK,(err)=>{
                        if(err) {
                            console.log("File Does not Exist.")
                        }else{
                            console.log("File Exist")
                        }

                        //Delete the File
                        fs.unlinkSync("newSample.txt",(err)=>{
                            if(err) {
                                throw err
                            }
                            console.log("File Deleted Successfully!!")
                        })
                    })
                })
            })
        })
    })
})