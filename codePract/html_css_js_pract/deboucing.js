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





function DeBouncing(fn, delay){
    let timer;

    return function(...args){
          clearTimeout(timer);

          timer = setTimeout(() => {
              fn(...args)
          },delay);
    }
}

function search(n){
    console.log("searching process is going on!  " + n);
}

const DebounceSerach = DeBouncing(search, 1000);


DebounceSerach("H");
DebounceSerach("He");
DebounceSerach("Hel");
DebounceSerach("Hell");
DebounceSerach("Hello");

