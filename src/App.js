import { useState } from 'react'
import "./toDo.css";
// import artwork from "./Components/artwork.jpg";



const Todo = () => {
    const [input, setInput] = useState ("")
    const [list, setList] = useState([])
    const [doneList, setdoneList] = useState([])

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const update = (event) => {
        this.setUserInput(event.target.value)
    }

    const addHandler = () => {
        const newArray = [...list]
        newArray.push(input)
        setList(newArray)
        setInput("") // clear input text box by setting setInput to an empty string 
    }


   const removeHandler = (index) => {
       const newArray = [...list]
       newArray.splice(index,1); // remove array items using .splice method
       setList(newArray) //update list)
   }

    const handleEnterAdd = (event) => {
    if(event.key === 'Enter'){
        const newArray = [...list]
        newArray.push(input)
        setList(newArray)
        setInput("") // clear input text box by setting setInput to an empty string 
    }
  }


    return (
    <div className="wrapper"><div className="box1">
            <h1>to do list: </h1>
            <input type="text" value={input} onKeyPress={handleEnterAdd} onChange={inputHandler} placeholder="e.g. bake cookies.."></input> 
            <button onClick={addHandler} className="addButton">add</button>
            {list.map((item, index) => {
                return <Note update={update} index={index} removeHandler={removeHandler} key={index} item={item} /> // send removehandler function to note component so it can be used below note component=> sending function as prop. 
            })}
            {/* <div className="image"><img src={artwork} alt=""/></div> */}
        </div>
    </div>
    )
}

const Note = (props) => {
    return  (
        <div className="buttonRDBox">
            {/* <button className="done-btn"><a>done</a></button> */}
            <h2 className="taskbox">{props.item}</h2>
           <div id="doneremoveButtons"> 
            </div>
            <button className="remove-btn"onClick={()=>props.removeHandler(props.index)}><a>remove</a></button> 
        
        </div>
    )
}
export default Todo

// 
