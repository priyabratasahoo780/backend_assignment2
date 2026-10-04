// normal funxtion without curring

function add(a,b,c){
    return a + b + c;
} 

console.log(add(10,20,30));

// curring code
function adds(d){
   return function(e){
    return function(f){
        return d + e + f;
    };
   };
}

console.log(adds(10)(20)(30));