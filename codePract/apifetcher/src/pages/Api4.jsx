// import { useState } from "react";

// export default function Api4() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);

//   // Add Todo
//   const handleAdd = () => {
//     if (task.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: task,
//       completed: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTask("");
//   };

//   // Delete Todo
//   const handleDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   // Complete Todo
//   const handleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAdd();
//     }
//   };

//   return (
//     <div style={{ maxWidth: "600px" }}>
//       <h1 className="page-title">Api 4 (From Comments) - Todo List</h1>
//       <p className="page-subtitle">
//         Interactive todo manager from App.jsx comments with add, toggle, and delete.
//       </p>

//       <div className="toolbar">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Enter task..."
//           className="search-input"
//           style={{ flex: 1 }}
//         />
//         <button className="btn" onClick={handleAdd}>
//           Add Task
//         </button>
//       </div>

//       {todos.length === 0 && (
//         <div className="status-msg" style={{ textAlign: "left", padding: "20px 0" }}>
//           No tasks added yet. Type a task above and click Add!
//         </div>
//       )}

//       <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             style={{
//               background: "#1e293b",
//               border: "1px solid #334155",
//               borderRadius: "8px",
//               padding: "12px 16px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               gap: "12px",
//             }}
//           >
//             <span
//               style={{
//                 textDecoration: todo.completed ? "line-through" : "none",
//                 color: todo.completed ? "#94a3b8" : "#f8fafc",
//                 flex: 1,
//                 fontSize: "1rem",
//               }}
//             >
//               {todo.text}
//             </span>

//             <div style={{ display: "flex", gap: "8px" }}>
//               <button
//                 className={`btn ${todo.completed ? "btn-secondary" : "btn-success"}`}
//                 onClick={() => handleComplete(todo.id)}
//                 style={{ padding: "6px 12px", fontSize: "0.85rem" }}
//               >
//                 {todo.completed ? "Undo" : "Complete"}
//               </button>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleDelete(todo.id)}
//                 style={{ padding: "6px 12px", fontSize: "0.85rem" }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const handleApi = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const dataJson = await res.json();

      setData(dataJson.products);
      setFilters(dataJson.products);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
            
      const dataCategory = data.filter((item) => {
        return category === "" || item.category === category;
      })  

      const handleSearch = () => {
          const res = dataCategory.filter((e) => {
                return e.title.toLowerCase().includes(search.toLowerCase());
          })
              setFilters(res);
      }  
  return (
    <div>
      <h1>API Fetch</h1>

      <button onClick={handleApi}>API FETCH</button>
      <input onChange={(e) => setSearch(e.target.value)} value={search} placeHolder='Enter title'/>
       <button onClick={handleSearch}>search</button><br/> <br/>
     <select onClick={(e) => setCategory(e.target.value)}>
     <option>beauty</option>
      <option>fragrances</option>
       <option>groceries</option>
        <option>furniture</option>
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
