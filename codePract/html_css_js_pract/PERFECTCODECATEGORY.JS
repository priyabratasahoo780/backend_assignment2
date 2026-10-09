
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const handleApi = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();

      setData(dataJson.products);
          
          const uniqueCategories = [
            ... new Set(dataJson.products.map((item) => item.category))
          ];
              setCategories(uniqueCategories);
 
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
         const handleFilter = data.filter((item) => {
             const matchFilter = category === "" || category === item.category;
             return matchFilter;
         })
   
  return (
    <div>
      <h1>API Fetch</h1>

      <button onClick={handleApi}>API FETCH</button>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
      <option value="">All Category</option>
      {
        categories.map((cat) => (
          <option key={cat} value={cat}>
           {cat}
          </option>
        ))
      }
      </select>
      {handleFilter.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
