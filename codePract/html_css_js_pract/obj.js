     
let arr = [
    {
    name: "Nitish",
    role: "admin"
},
{
    name: "Ankit",
    role: "user"
},
{
    name: "Rishi",
    role: "user"
},
{
    name: "Aman",
    role: "admin"
}
]

let Obj = {};

for(let n of arr){
  let roles = n.role;
     if(Obj[roles] === undefined){
        Obj[roles] = []; 
     }
        Obj[roles].push(n.name);
}

   console.log(Obj);

