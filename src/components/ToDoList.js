import React from 'react';
import ToDoRow from './ToDoRow';

function ToDoList(props) {
    return (
        <div className="list ">

            {props.todos.map((todo, index) => {
                return (
                    <ToDoRow complete={props.complete} deleteToDo={props.deleteTodo} todo={todo} index={index} key={index} showModal={props.showModal} />
                )

            })}
        </div>
    )

}

export default ToDoList;