function throttling(callback, delay){
    let lastcall = 0;

    return function(...args){

        const now = Date.now();

        if(now - lastcall <= delay){
            return;
        }
          lastcall = now;
          return callback(...args);
    }
}

function sendMessage(message){
    console.log(`Sending Message`, message);
}

const sendChat = throttling(sendMessage, 1000);

sendChat("How are you");
sendChat("What are you doing");
sendChat("Good");
sendChat("Fine");
sendChat("OK");