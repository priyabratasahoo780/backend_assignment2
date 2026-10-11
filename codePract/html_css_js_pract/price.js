
import {useState} from 'react';

export default function ApiFetch(){
  const [data, setData] = useState([]);
  const [sortOrder, setSortorder] = useState("");
  
  let ITEM_PAGE = 3;

  const handleApi = async() => {
      try{
            const res = await fetch('https://dummyjson.com/products');
            const dataJson = await res.json();
            setData(dataJson.products);
            setCategory(dataJson.products);
         
      } catch(error){
        console.log("error", error.message);
      }
  }

 
      
    const handlePrice = (e) => {
         setSortorder(e.target.value);
    } 
           const sortData = [...data].sort((a,b) => {
                if(sortOrder == 'high-low'){
                    return b.price - a.price;
                }
                if(sortOrder == 'low-high'){
                    return a.price - b.price;
                }
                  return 0;
           });
         
        
           
     return (
          <div>
            <h1>hello world</h1>
    <button onClick={handleApi}>Api fetch</button>
    
   <select value={sortOrder} onChange={handlePrice}>
   <option>Select Price Filter</option>
   <option value='high-low'>high to low</option>
   <option value='low-high'>low to high</option>
   </select>
    {  
      sortData.map((item) => (
        <div key={item.id}>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
                <img src={item.images[0]} alt='imgs' width='200' />
        <h1>{item.category}</h1>
        <h1>{item.price}</h1>
        </div>
      ))
    }      

     
          </div>
     )
}