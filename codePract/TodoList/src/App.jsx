// import React from 'react'
// import { useState } from 'react';
// export default function App() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//    const handleAdd = () => {
//     if (task.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: task,
//       completed: false
//     };

//     setTodos([...todos, newTodo]);
//     setTask("");
//   };

//   // Delete Todo
//   const handleDelete = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   // Complete / Undo
//   const handleToggle = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   // Clear Completed
//   const clearCompleted = () => {
//     setTodos(todos.filter((todo) => !todo.completed));
//   };

//   // Search
//   const searchedTodos = todos.filter((todo) =>
//     todo.text.toLowerCase().includes(search.toLowerCase())
//   );

//   // Filter
//   const filteredTodos = searchedTodos.filter((todo) => {
//     if (filter === "active") {
//       return !todo.completed;
//     }

//     if (filter === "completed") {
//       return todo.completed;
//     }

//     return true;
//   });

//   // Enter key
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAdd();
//     }
//   };

//   return (
//     <div>
//       <input type='text' placeholder='enter your tasks' value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={handleKeyDown}/>
//       <button style={{margin: 10}} onClick={handleAdd}>Add</button>
//            <input
//         type="text"
//         placeholder="Search todo..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={() => setFilter("all")}>
//         All
//       </button>
//       <button onClick={() => setFilter("active")}>
//         Active
//       </button>
//       <button onClick={() => setFilter("completed")}>
//         Completed
//       </button>
//       <button onClick={clearCompleted}>
//         Clear Completed
//       </button>
//  {filteredTodos.length === 0 ? (
//         <p>No Todo Found</p>
//       ) : (
//         filteredTodos.map((todo) => (
//           <div key={todo.id}>
//             <span
//               style={{
//                 textDecoration: todo.completed
//                   ? "line-through"
//                   : "none"
//               }}
//             >
//               {todo.text}
//             </span>
//       <button onClick={() => handleToggle(todo.id)}>
//               {todo.completed ? "Undo" : "Complete"}
//             </button>

//             <button onClick={() => handleDelete(todo.id)}>
//               Delete
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   )
// }



import react from 'react'; 
import {useState} from 'react';
export default function App(){

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

 const handleAdd = () => {
      if(task.trim() === "") return;

      const newTodo = {
         id: Date.now(),
         text: task
      }

          setTodos([...todos, newTodo]);
          setTask("");
    }
    const handleRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
      <h1>Todo List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add a tasks'/>
      <button onClick={handleAdd}>Add</button>
         {
          todos.map((todo)=> {
            return(
               <div key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={() => handleRemove(todo.id)}>Delete</button>
                </div>
            )
          } )
         }
    </div>
  )
  
}