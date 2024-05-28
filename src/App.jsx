

import { useState } from 'react';
import './App.css'

function App() {
  const [userInput, setUserInput ] = useState("");
  const [arr , setArr ] =useState([]);
  const [isChecked , setIsChecked ] = useState([]);
  function handleChangeCheckBox(event , todoListValue ){
    if(isChecked.includes(todoListValue)){
      const newArray = isChecked.filter((value)=> value !== todoListValue);
      setIsChecked(newArray);
    }else{
      setIsChecked([...isChecked,todoListValue]);
    }
  }
  
  // function handleChange(e){
  //    setUserInput(e.target.value);
  // };
  // function handleClick(){
  //  setArr([...arr, userInput])
  // }
  return (
   
      <div className='card'>
          <h2>Todo List</h2>
          <input type="text" onChange={(e)=>{setUserInput(e.target.value);}} />

          <button onClick={()=>{setArr([...arr,userInput])}}>Add Item</button>
          <ul className='listItem'>
            {
              arr.map((item, i)=>{
                return(
                  <li key={i}>
                    <div>
                        <input id={item} name='todo-list' type="checkbox" value={item} onChange={(e)=> {handleChangeCheckBox(e , item)}} />
                        <label className='todolabel' htmlFor={item}>{isChecked.includes(item) ? (<del>{item}</del>) : item}</label>
                    </div>
                     <button onClick={()=>{
                         setArr(arr.filter((e)=>e !== item))}}>Delete</button>
                  </li>
                );
              })
            }
          </ul>
      </div>
    
  )
}

export default App
