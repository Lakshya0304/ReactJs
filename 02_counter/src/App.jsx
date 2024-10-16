
import { useState } from 'react';
import './App.css'

function App() {
  let [count , setCount] = useState(1)

  const addValue = () => {
    // setCount(++count);
    if(count <20){
      setCount(count => count + 1) ;
    }else {return}
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count =>count - 1);
    }else{return}
  }

  return (
    <>
     <h1></h1>
     <h2>Counter Value : {count}</h2>
     <button onClick={ addValue }>Add counter</button>
     <br></br>
     <button onClick={ removeValue}>Remove counter</button>
    </>
  )
}

export default App
