import { Link } from "react-router-dom";

export default function Home() {
  const cards = [
    {
      title: "Api 1 (Main App)",
      path: "/api1",
      badge: "Pagination",
      desc: "Products fetching from DummyJSON with live search and 5 items per page pagination (Next/Prev controls)."
    },
    {
      title: "Api 2 (From Comments)",
      path: "/api2",
      badge: "Loading State",
      desc: "Products fetching with explicit loading indicator, client-side title search, and full product list."
    },
    {
      title: "Api 3 (From Comments)",
      path: "/api3",
      badge: "Limit 5",
      desc: "Fetches a quick sample of 5 products with search filtering and disabled search when empty."
    },
    {
      title: "Api 4 (From Comments)",
      path: "/api4",
      badge: "Todo App",
      desc: "Interactive Todo List component with add, delete, and toggle complete features."
    },
    {
      title: "Api 5 (From Comments)",
      path: "/API5",
      badge: "filter Category",
      desc: "Interactive Todo List component with add, delete, and toggle complete features."
    }
  ];

  return (
    <div>
      <h1 className="page-title">Welcome to API Fetcher Practice</h1>
      <p className="page-subtitle">
        Explore different React API fetching implementations and practices with client-side routing.
      </p>

      <div className="product-grid" style={{ marginTop: "28px" }}>
        {cards.map((card) => (
          <div key={card.path} className="product-card">
            <span className="product-badge">{card.badge}</span>
            <h2 className="product-title">{card.title}</h2>
            <p className="product-desc">{card.desc}</p>
            <Link to={card.path} style={{ marginTop: "auto" }}>
              <button className="btn" style={{ width: "100%" }}>
                Open {card.title.split(" ")[0]} {card.title.split(" ")[1]}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
