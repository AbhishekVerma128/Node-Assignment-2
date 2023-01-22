// readFromLine.js

const readline = require("readline");
const takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

takeInput.question("Enter name ",(ans)=>{
    console.log(`Hello ${ans}`);
    takeInput.close()
})