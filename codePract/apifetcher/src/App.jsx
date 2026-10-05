// import {useState} from 'react'
// export default function App(){

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState([]);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const Items_PER_PAGE = 5;
//   const handleApi = async() =>{
//        setLoading(true);
//         try{
//              const res = await fetch('https://dummyjson.com/products');
//              const dataJson = await res.json();
//              setData(dataJson.products);

//              setCurrentPage(1); 
//         }
//         catch(error){
//           console.log(error);
//         }
//         finally{
//           setLoading(false);
//         }
//   }

//   const handleSearch = () => {
//     const result = data.filter((e) => {
//       return e.title.toLowerCase().includes(search.toLowerCase())
//     });
//      setFilter(result);
//   } 
//     console.log(handleSearch);
//   return(
//     <div>
//       <input title='searchs' value={search} onChange={(e) => setSearch(e.target.value)} style={{margin:10}}/>
//       <div className=''>
//       <button onClick={handleApi}>Api fetch</button>
//       <button onClick={handleSearch}>Search</button>
//       </div>
//       {!loading && filter.length === 0 &&(
//         <p>click the button</p>
//       )}
//       {loading && (
//          <div>loading...</div>
//       )}
//       {
//   !loading && (
//     filter.length > 0 ? (
//       filter.map((e) => (
//         <div key={e.id}>
//           <h1>{e.title}</h1>
//           <p>{e.description}</p>
//           <p>{e.tags[0]}</p>

//           <img
//             src={e.images[0]}
//             alt="image"
//             width={200}
//             height={200}
//           />

//           <h2>Price: {e.price}</h2>
//         </div>
//       ))
//     ) : (
//       data.map((e) => (
//         <div key={e.id}>
//           <h1>{e.title}</h1>
//           <p>{e.description}</p>
//           <p>{e.tags[0]}</p>

//           <img
//             src={e.images[0]}
//             alt="image"
//             width={200}
//             height={200}
//           />

//           <h2>Price: {e.price}</h2>
//         </div>
//       ))
//     )
//   )
// }
//     </div>
//   )
// }




// import { useState } from "react";

// export default function App() {

//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [search, setSearch] = useState("");

//   // API Fetch
//   const handleApi = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products?limit=5");
//       const dataJson = await res.json();
//       setData(dataJson.products);
//       setFilter(dataJson.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const handleSearch = () => {

//     const result = data.filter((e) => {
//       return e.title
//         .toLowerCase()
//         .includes(search.toLowerCase());
//     });
//     setFilter(result);
//   };


//   return (
//     <div>

//       <input
//         title="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search product..."
//         style={{ margin: 10 }}
//       />
//       <div>
//         <button onClick={handleApi}>
//           API Fetch
//         </button>
//         <button
//           onClick={handleSearch}
//           disabled={data.length === 0}
//         >
//           Search
//         </button>
//       </div>

//       {filter.map((e) => (
//         <div key={e.id}>
//           <h1>{e.title}</h1>
//           <p>{e.description}</p>
//           <p>{e.tags[0]}</p>
//           <img
//             src={e.images[0]}
//             alt="product"
//             width={200}
//             height={200}
//           />
//           <h2>Price: {e.price}</h2>

//         </div>
//       ))}

//     </div>
//   );
// }




// import { useState } from "react";

// export default function App() {

//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [search, setSearch] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const ITEMS_PER_PAGE = 5;
//   const handleApi = async () => {
//     try {
//       const res = await fetch(
//         "https://dummyjson.com/products"
//       );
//       const dataJson = await res.json();
//       setData(dataJson.products);
//       setFilter(dataJson.products);
//       setCurrentPage(1);
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const handleSearch = () => {

//     const result = data.filter((e) => {
//       return e.title
//         .toLowerCase()
//         .includes(search.toLowerCase());
//     });

//     setFilter(result);
//     setCurrentPage(1);
//   };


//   const startIndex =
//     (currentPage - 1) * ITEMS_PER_PAGE;

//   const endIndex =
//     startIndex + ITEMS_PER_PAGE;

//   const currentData =
//     filter.slice(startIndex, endIndex);

//   const handleNext = () => {

//     if (endIndex < filter.length) {
//       setCurrentPage(currentPage + 1);
//     }

//   };


//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div>

//       {/* Search */}

//       <input
//         title="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search product..."
//         style={{ margin: 10 }}
//       />

//       <div>
//         <button onClick={handleApi}>
//           API Fetch
//         </button>
//         <button
//           onClick={handleSearch}
//           disabled={data.length === 0}
//         >
//           Search
//         </button>

//       </div>



//       {currentData.map((e) => (
//         <div key={e.id}>
//           <h1>{e.title}</h1>
//           <p>{e.description}</p>
//           <p>{e.tags[0]}</p>
//           <img
//             src={e.images[0]}
//             alt="product"
//             width={200}
//             height={200}
//           />
//           <h2>Price: {e.price}</h2>
//         </div>
//       ))}



//       {filter.length > 0 && (
//         <div style={{ marginTop: 20 }}>
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
//           <span style={{ margin: 20 }}>
//             Page {currentPage}
//           </span>
//           <button
//             onClick={handleNext}
//             disabled={endIndex >= filter.length}
//           >
//             Next
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }



import React from 'react';
import { useState } from 'react'

function App() {
const arr = [
  {
    id : 1 ,
    name : "TV" , 
  },
  {
    id : 2 ,
    name : "ASD" , 
  },
  {
    id : 3 ,
    name : "ZXC" , 
  },
  {
    id : 4 ,
    name : "QWE" , 
  },
  {
    id : 5 ,
    name : "DFG" , 
  },
]

const [data , setData] = useState(arr) ; 
const [search , setSearch] = useState("") ; 
const [name , addName] = useState("") ; 
const [id , addId] = useState(0) ; 

  function searchFunc () {
    const a = arr.filter((e)=>e.name.toLowerCase().includes(search)) ; 
    console.log(a) ; 
    setData(a) ; 
  }

  function addFun () {
    setData([...data , {id : id , name : name}]) ; 
    // arr.push({id : id , name : name}) ; 
  }

  function removedata (id) {
    const a = data.filter((e)=>e.id!=id) ; 
    console.log(data) ; 
    setData(a) ; 
  }
  

  return (
    <div>
      <input value={search} onChange={(e)=>{
        setSearch(e.target.value)
        console.log(e.target.value)
      }} />
      <button onClick={searchFunc} > search </button>
      <br/>
      <br/>
      <input value={name} onChange={(e)=>addName(e.target.value)} />
      <input value={id} onChange={(e)=>addId(e.target.value)} />
    <button onClick={addFun} > add </button>


      <br/>
      <br/>
      {
        data && 
        data.map((e)=>{
          return (
            <div key={e.id}>
            <div key={e.id}>{e.name} </div>
            <button onClick={()=>removedata(e.id)}>remove</button> 
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App