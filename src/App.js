import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [todos, setTodos] = useState([{ text: "первое задание", done: false }, { text: "второе задание", done: false }]);
  const [value, setValue] = useState("");

  const addTodo = () => {

    if (value) {
      let arr = [...todos, { text: value, done: false }];
      console.log(arr)
      setTodos(arr)
      setValue("")
    }

  }
  const complete = (index) => {
    let arr = [...todos];
    arr[index].done = !arr[index].done;
    setTodos(arr);

  }
  const deleteTodo = (index) => {
    let arr = [...todos];
    arr.splice(index, 1);
    setTodos(arr);
    setValue("")
  }

  return (
    <div className="App">
      <h2>ToDo List</h2>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter new todo" value={value} onChange={e => setValue(e.target.value)} />
        <div className="input-group-append">
          <button className="btn  btn-danger" type="button" onClick={addTodo}>Add</button>
        </div>
      </div>
      { (todos.length!==0) && <div>There are (is) {todos.length} todo(s)</div>}
      
      <div className="list ">
        {todos.map((todo, index) => {
          return (
            <div className="listrow border">
              <div key={index} index={index} style={{ color: todo.done ? "green" : "red" }} className="elem">{todo.text}</div>
              <div className="elem" key={`complete-${index}`}><button className="btn btn-danger" onClick={() => { complete(index) }} >Complete/Todo</button></div>
              <div className="elem" key={`delete-${index}`}><button className="btn btn-danger" onClick={() => { deleteTodo(index) }} >Deleted</button></div>
            </div>
          )

        })}
      </div>


    </div>
  );
}

export default App;
