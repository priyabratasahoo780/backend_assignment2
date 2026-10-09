import {useState} from 'react';
export default function App(){
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

     const ITEM_PAGE = 5;

  const handleApi = async() => {
    try{
      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();
       setData(dataJson.products);
       setFilters(dataJson.products);
       setCurrentPage(1);
    } catch(error){
        console.log('error', error.message);
    }
  }
           const handleSearch = () => {
               const result = data.filter((e) => {
                   return e.title.toLowerCase().includes(search.toLowerCase());
               });
                    setFilters(result);
           }
              const startIndex = (currentPage - 1) * ITEM_PAGE;
              const endIndex = startIndex + ITEM_PAGE;
              const currentData = filters.slice(startIndex, endIndex);
              const totalPage = Math.ceil(filters.length/ ITEM_PAGE);

           const nextPage = () => {
                 if(endIndex < totalPage){
                  setCurrentPage(currentPage + 1);
                 }
           }

            const prevPage = () => {
                 if(currentPage > 1){
                  setCurrentPage(currentPage - 1);
                 }
           }

  return(
    <div>
      <h1>API Fetch</h1>
      <button onClick={handleApi}>API FETCH</button>
       <input onChange={(e) => setSearch(e.target.value)} value={search} placeHolder='enter title'/>
       <button onClick={handleSearch}>Search</button>
       <button onClick={nextPage}>Next</button>
       <button onClick={prevPage}>Prev</button>
      

      {
         currentData.map((item) => (
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