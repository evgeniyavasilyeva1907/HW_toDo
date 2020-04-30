import React from 'react';
import ToDoRow from './ToDoRow';

function ToDoList(props) {
    return (
        <div className="list ">

            {props.todos.map((todo, index) => {
                return (
                    <ToDoRow complete={props.complete} deleteToDo={props.deleteToDo} todo={todo} index={index} key={index} />
                )

            })}
        </div>
    )

}

export default ToDoList;