import PropsDemo from './components/PropsDemo.jsx'
import {useState} from 'react';

export default function App(){
    const [count, setCount] = useState(0);
    function IncBtn(){
       setCount(count + 1);
    }
     function DecBtn(){
      if(count > 0){
       setCount(count - 1);
      }
    }
     function ResBtn(){
       setCount(0);
    }
  return(
    <div>
      <PropsDemo name="abdul" age={20}/>
      <PropsDemo name="Mihir" age={24}/>
            <h1>Count:{count}</h1>
            <div style={{gap:10, display:"flex" ,flexDirection:"row" , justifyContent:"center", alignItems:"center"}}>
       <button onClick={IncBtn}>Increase</button>
       <button onClick={DecBtn}>Decrease</button>
       <button onClick={ResBtn}>Reset</button>
       </div>
    </div>
  )
}
