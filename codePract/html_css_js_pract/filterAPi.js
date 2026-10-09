
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
   const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  // const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
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
            
      const dataCategory = data.filter((item) => {
             const matchFilter = category === "" || item.category === category;
              const matchSearch =  item.title.toLowerCase().includes(appliedSearch.toLowerCase());
              // setFilters(res);

              return matchFilter && matchSearch;
      })  

      const handleSearch = () => {
           setAppliedSearch(search);
      }  
  return (
    <div>
      <h1>API Fetch</h1>

      <button onClick={handleApi}>API FETCH</button>
      <input onChange={(e) => setSearch(e.target.value)} value={search} placeHolder='Enter title'/>
       <button onClick={handleSearch}>search</button><br/> <br/>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All category</option>
        {
          categories.map((cat) => (
             <option key={cat} value={cat}>
             {cat}
             </option>
          ))
        };
        </select>
      {dataCategory.map((item) => (
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
