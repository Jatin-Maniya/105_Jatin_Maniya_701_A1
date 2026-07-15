const readline = require("readline")
const chatbot = require("./chatbot")

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log("===== College Chatbot =====")
console.log("Type 'bye' to exit.");

function chat(){
    r1.question("You : ",(message)=>{
        console.log("Bot : ",chatbot(message))

        if(message.toLowerCase() === "bye" || message.toLowerCase().indexOf("thank") > -1) {
            r1.close()
        }else{
            chat()
        }
    })
}

chat()