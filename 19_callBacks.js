`use strict`;

function hello(greetCallBack,sayByeCallback) {
    console.log("Hello");
    greetCallBack(100);
    sayByeCallback("See you tomorrow");
}

let greet = function(num){
    console.log("Good Morning", num);
}

let sayBye  = function(message){
    console.log(`Good Bye ,${message}`);
}

hello(greet,sayBye);