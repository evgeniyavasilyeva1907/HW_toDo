import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';
import Example from './components/Example';

function App() {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentToDo, setCurrentToDo] = useState(null);


  useEffect(() => {
    if (localStorage.getItem("ToDo") !== null) {
      setTodos(JSON.parse(localStorage.getItem("ToDo")))
    }
    else {
      localStorage.setItem("ToDo", JSON.stringify(todos))
    }
  }, [])
  useEffect(() => { localStorage.setItem('ToDo', JSON.stringify(todos)); });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (index) => {
    setShowModal(true);
    setCurrentToDo(index)
  }

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const inputEnter = (e) => {
    if (e.key === 'Enter') {
      if (value) {
        let todo = new ToDo(value)
        let arr = [...todos, todo];
        console.log(arr)
        setTodos(arr)
        setValue("")

      }
    }
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
    setShowModal(false);

  };



  return (
    <div className="App">
      <h2>ToDo List</h2>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter new todo" value={value} onChange={changeValue.bind(this)} onKeyPress={inputEnter.bind(this)}/>
        <div className="input-group-append">
          <button className="btn  btn-danger" type="button" onClick={addTodo}>Add</button>
        </div>
      </div>

      {(todos.length === 1) && <div>There  is {todos.length} todo</div>}
      {(todos.length > 1) && <div>There are {todos.length} todos</div>}
      <ToDoList todos={todos} complete={complete} showModal={handleShowModal} />
      <Example handleCloseModal={handleCloseModal} deleteToDo={deleteTodo} show={showModal} currentToDo={currentToDo} />
    </div>
  );
}




export default App;
