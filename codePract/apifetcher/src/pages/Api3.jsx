import {useState} from 'react';
export default function App(){
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
 const [search, setSearch] = useState("");
const [appliedSearch, setAppliedSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleApi = async() => {
    try{
      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();
       setData(dataJson.products);
       setFilters(dataJson.products);
    } catch(error){
        console.log('error', error.message);
    }
  }
  const handleSearch = () => {
  setAppliedSearch(search);
};
 const categoryData = data.filter((item) => {
  const matchCategory =
    category === "" || item.category === category;

  const matchSearch = item.title
    .toLowerCase()
    .includes(appliedSearch.toLowerCase());

  return matchCategory && matchSearch;
});



  return(
    <div>
      <h1>API Fetch</h1>
      <button onClick={handleApi}>API FETCH</button>
       <input onChange={(e) => setSearch(e.target.value)} value={search} placeHolder='enter title'/>
       <button onClick={handleSearch} disabled={categoryData.length === 0}>Search</button>
       <select
  value={category}
  onChange={(e) => {
    setCategory(e.target.value);
  }}
>
  <option value="">All Categories</option>
  <option value="beauty">Beauty</option>
  <option value="fragrances">Fragrances</option>
  <option value="furniture">Furniture</option>
  <option value="groceries">Groceries</option>
</select>

      {
         categoryData.map((item) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h1>{item.description}</h1>
              <h1>{item.category}</h1>
              <h1>{item.price}</h1>
            </div>
         ) )
      }
    </div>
  )
}