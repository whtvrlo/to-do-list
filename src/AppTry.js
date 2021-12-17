import { useState} from 'react'
import Form from './Components/Form'
import ToDoList from './Components/ToDoList'

import './AppTry.css'


let AppTry = () => {
    const [inputText, setInputText] = useState(""); 
    const [todos, setTodos] = useState([]);
    return (
        <div className="App">
            <h1>TO DO LIST</h1>
            <Form 
            inputText={inputText}
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}  />
            <ToDoList setTodos={setTodos} todos={todos}/>
        </div>
    )
}


export default AppTry
