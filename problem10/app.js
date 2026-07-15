console.log("Current File : ",__filename)
console.log("Current Directory : ",__dirname)

console.log("Node Version : ",process.version)
console.log("Platform : ",process.platform)

console.log("\nCommand Line Arguments : ")

const args = process.argv.slice(2)

if(args.length === 0) {
    console.log("No Command-line arguments provided")
}else{
    args.forEach((val,idx)=>{
        console.log(`Argument ${idx+1} : ${val}`)
    })
}

setTimeout(() => {
    console.log("This Message is Displayed after 2 seconds.")
}, 2000);

let count = 1;

const interval = setInterval(() => {
    console.log(`Interval Count : ${count}`)
    count++

    if(count > 5){
        clearInterval(interval)
        console.log("Interval Stopped")
    }
}, 1000);