// function debounce(callback, delay){
//   let timer;

//   return function() {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       callback();
//     }, delay);
//   }
// }

// function search(){
//   console.log("Api call");
// }

// const debouncedSearch = debounce(search, 1000);

// debouncedSearch();
// debouncedSearch();
// debouncedSearch();



// async function hello() {
//     return "Hello";
// }

// console.log(hello());






function debouncing(callback, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        },delay);
    }
}


function search(n){
    console.log("search somethings else " + n);
}


const debounceSearch = debouncing(search,1000);

debounceSearch("H");
debounceSearch("Hi");
debounceSearch("Him");

