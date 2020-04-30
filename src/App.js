import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const addTodo = () => {

    if (value) {
      let todo = new ToDo(value)
      let arr = [...todos, todo];
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
    setValue("");
  };



  return (
    <div className="App">
      <h2>ToDo List</h2>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter new todo" value={value} onChange={changeValue.bind(this)} />
        <div className="input-group-append">
          <button className="btn  btn-danger" type="button" onClick={addTodo}>Add</button>
        </div>
      </div>
      {(todos.length !== 0) && <div>There are (is) {todos.length} todo(s)</div>}
      <ToDoList todos={todos} complete={complete} deleteTodo ={deleteTodo}/>
      


    </div>
  );
}

export default App;
