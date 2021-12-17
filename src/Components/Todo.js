import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id)); // filtering state out, trying to find element that matches whatever we clickd on
        
    };

    return (
    <div className="todo">
        <li classNme="todo-item">{text}</li>
        <button className="complete-btn"><i className="fas fa-check"></i> </button>
        <button onClick={deleteHandler} className="trash-btn" ><i className="fas fa-trash"></i> </button>

    </div>
    );
}

export default Todo;

