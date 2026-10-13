
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApi = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();

      setData(dataJson.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>API Fetch</h1>

      <button onClick={handleApi} disabled={loading}>
        {loading ? "Loading..." : "API Fetch"}
      </button>

      {loading ? (
        <h2>...Loading</h2>
      ) : (
        data.map((e) => (
          <div key={e.id}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <img
              src={e.images[0]}
              alt={e.title}
              width="100"
              height="100"
            />
          </div>
        ))
      )}
    </div>
  );
}
