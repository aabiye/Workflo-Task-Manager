import React, { useState, useEffect } from "react";
import "./App.css";
import CreateTask from './Modals/CreateTask'
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const toggle = () => {
    setModal(!modal);
  }

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };
  const deleteInProgress = (id) => {
    const filterarray = inprogress.filter((x) => x.id !== id);
    setInprogress(filterarray);
  };

  const addtoCompleted = (id) => {
    const item = inprogress.find((x) => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = inprogress.filter((x) => x.id !== id);
    setInprogress(filterarray);
  };
  useEffect(() => {}, [todos, inprogress]);

  const deleteCompleted = (id) => {
    const filterarray = completed.filter((x) => x.id !== id);
    setCompleted(filterarray);
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <div className = "header">
            <h3 className="title">WORK<span class="flo">FLO</span></h3>
            <button className = "btn btn-primary" onClick = {() => setModal(true)}>Create a Task</button>
          </div>
          <div className = "task-container">
          </div>
          <div className="todos_wrapper">
            <div className="todos_list">
              <h3 className="todo_title">Todo List</h3>
              {todos.map((item, index) => (
                <div className="todo_card" key={item.id}>
                  <p className="card_text">{item.text}</p>
                  <FaCheck
                    onClick={() => addToProgress(item.id)}
                    className="icon-check-todo"
                  />
                  <FaTrash
                    onClick={() => deleteTodo(item.id)}
                    className="icon-trash-todo"
                  />
                </div>
              ))}
            </div>
            <div className="todos_list">
              <h3 className="todo_title">InProgress</h3>
              {inprogress.map((item, index) => (
                <div className="progress_card" key={item.key}>
                  <p className="card_text">{item.text}</p>
                  <FaCheck
                    onClick={() => addtoCompleted(item.id)}
                    className="icon-progress-todo"
                  />
                  <FaTrash
                    onClick={() => deleteInProgress(item.id)}
                    className="icon-trash-todo"
                  />
                </div>
              ))}
            </div>
            <div className="todos_list">
              <h3 className="todo_title">Completed</h3>
              {completed.map((item, index) => (
                <div className="completed_card" key={item.id}>
                  <p className="card_text">{item.text}</p>
                  <FaTrash
                    onClick={() => deleteCompleted(item.id)}
                    className="icon-trash-todo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CreateTask toggle = {toggle} modal = {modal} />
    </>
  );
}

export default App;
