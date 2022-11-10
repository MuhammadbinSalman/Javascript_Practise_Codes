const mod_include = require("prompt-sync")
const prompt = mod_include();
// Prompt Sync Library Included 

var number = prompt("Hey user, enter a number....")
for(i=1;i<=10;i++){
    var calcu=number*i;
    console.log(`${number} x ${i} = ${calcu}`)
}