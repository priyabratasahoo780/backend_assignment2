import {useState} from 'react';

export default function App(){
  const [user, setuser] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
      if(user.trim() === "") return;
      const newUser = {
         id: Date.now(),
         name: user
      }
           
          setUsers([...users, newUser]);
          setuser("");
  }

  const handleDelete = (id) => {
      const res = users.filter((e) => e.id !== id);
      setUsers(res);
  }

  const result = users.filter((e) => {
       return e.name.toLowerCase().includes(search.toLowerCase())
  });
           
  return (
    <div>
    <h1>Todo List</h1>
    <input onChange={(e) => setuser(e.target.value)} placeholder='Add users' value={user}/>
    <button onClick={handleAdd}>Add Users</button>
    <input placeholder='search users' onChange={(e) => setSearch(e.target.value)} value={search} />
    {
      result.map((e) => (
        <div key={e.id}>
        <h1>{e.name}</h1>
        <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))
    }
    </div>
  )
}