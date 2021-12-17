import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {

  const inputTextHandler = (e) => {
    console.log(e.target);
    setInputText(e.target.value)
  }
  const submitToDoHandler = (e) => {
    e.preventDefault(); // prevents reloading of page, then connect to button onClick
    setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000} ])

  }
    return (
        <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    )
}


export default Form
