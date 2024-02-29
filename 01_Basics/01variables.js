const accountId  =1131;
let accountEmail = "abc@gmail.com"
var accountPassword = "1234"
accountCity ="Jaipur"
let accountState; // if we donot define the variable after declaring then it will print undefined 



// accountId = 1212  ---- > not allowed
accountEmail = "hello@gmail.com"
accountPassword="1231212"
accountCity="Delhi" 


/* prefer not to use var
because of issue of scope scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState] );


