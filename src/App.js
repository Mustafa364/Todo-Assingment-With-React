
import React, { useState } from 'react'

const App = () => {
  const [inputvalu, setinputvalu] = useState('');
  const [inputArr, setinputArr] = useState([]);

  const additem = () => {
    if(inputvalu == ""){
      alert("input the data")
    }else{

      setinputArr([...inputArr,inputvalu]);
    }
  }
    const deleteitem = (id) => {
    const newArr = inputArr.filter((val, index) => {
      return id !== index
    })
    setinputArr(newArr)
  }
  const deleteall = () => {
    inputvalu("")
  }

  return(
    <div style={{textAlign: "center"}}>
      <div>
        <h1>Todo App</h1>
        <input type="text" value={inputvalu} onChange={(e)=> {setinputvalu(e.target.value)}} />

        <button onClick={additem}>Add Todo</button>
        <button onClick={deleteall}>Delete All</button>
      </div>
      <div>
         <ul>
           {
            inputArr.map((val, index) => {
              return <li key={val}>{val} <button onClick={()=> deleteitem(index)}>Delete</button> </li>
            })
          }
        </ul> 
      </div>

    </div>
  )
}



export default App