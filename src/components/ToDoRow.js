import React from 'react';


function ToDoRow({todo, index, complete, showModal}) {

    return (
        <div className="listrow border" key={index}>
            <div style={{ color: todo.done ? "green" : "red" }} className="elem">{todo.text}</div>
            <div className="elem" ><button className="btn btn-danger" onClick={complete.bind(this, index)} >Complete/Todo</button></div>
            <div className="elem" ><button className="btn btn-danger" onClick={showModal.bind(this, index)} >Delete</button></div>
        </div>
    )

}




export default ToDoRow;