import React from 'react';

function ToDoRow({todo, index, complete, deleteTodo}) {

    return (
        <div className="listrow border" >
            <div style={{ color: todo.done ? "green" : "red" }} className="elem">{todo.text}</div>
            <div className="elem" ><button className="btn btn-danger" onClick={complete.bind(this, index)} >Complete/Todo</button></div>
            <div className="elem" ><button className="btn btn-danger" onClick={deleteTodo.bind(this, index)} >Deleted</button></div>
        </div>
    )

}




export default ToDoRow;