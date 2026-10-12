
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const handleAdd = () => {
         if(user.trim() === "") return ;

         setUsers([...users,{
          id: Date.now(),
          name: user
         }]);
               setUser("");
  }

  const handleDelete = (id) => {
          setUsers(users.filter((item) => item.id !== id));
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={(e) => setUser(e.target.value)} value={user}/>
      <button onClick={handleAdd}>Add users</button>
      {
        users.map((e) =>(
          <div key={e.id}>
          <h1>{e.name}</h1>
          <button onClick={() => handleDelete(e.id)}>delete</button>
          </div>
        ))
      }
        </div>
  )
}