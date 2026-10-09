import { useState } from "react";

export default function Api1() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const handleApi = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();
      setData(dataJson.products);
      setFilter(dataJson.products);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    const result = data.filter((e) => {
      return e.title.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = filter.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < filter.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="page-title">Api 1 (App.jsx) - Products with Pagination</h1>
      <p className="page-subtitle">
        Fetches products from DummyJSON with 5 items per page and search filtering.
      </p>

      <div className="toolbar">
        <input
          title="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product..."
          className="search-input"
        />
        <button className="btn" onClick={handleApi}>
          API Fetch
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleSearch}
          disabled={data.length === 0}
        >
          Search
        </button>
      </div>

      {data.length === 0 && (
        <div className="status-msg">Click "API Fetch" to load products.</div>
      )}

      <div className="product-grid">
        {currentData.map((e) => (
          <div key={e.id} className="product-card">
            {e.images?.[0] && (
              <img
                src={e.images[0]}
                alt={e.title}
                className="product-img"
              />
            )}
            <span className="product-badge">{e.tags?.[0] || "product"}</span>
            <h2 className="product-title">{e.title}</h2>
            <p className="product-desc">{e.description}</p>
            <h3 className="product-price">${e.price}</h3>
          </div>
        ))}
      </div>

      {filter.length > 0 && (
        <div className="pagination-controls">
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="page-indicator">
            Page {currentPage} of {Math.ceil(filter.length / ITEMS_PER_PAGE)}
          </span>
          <button
            className="btn btn-secondary"
            onClick={handleNext}
            disabled={endIndex >= filter.length}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
