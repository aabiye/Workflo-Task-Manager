import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";

const TodoList = () => {
  {
    /* first method */
  }

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  {
    /* second method */
  }

  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };

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
      <div className="header">
        <h2 className="title">
          WORK<span className="flo">FLO</span>
        </h2>
        <div className="row">
          <div className="col taskbtn">
              <button
                className="btn btn-outline-dark form-control rounded-pill" id="creatTaskBtn"
                onClick={() => setModal(true)}
              >
                Create a Task
              </button>
          </div>
          <div className="col">
            <div className="input-group" id="search-container">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search for a task"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-outline-dark">
                Search
              </button>
            </div>
          </div>
          <div className="col">
            <div className="select-header">
              <select
                className="form-select" id="filterBy"
                aria-label="select something"
              >
                <option defaultValue>Filter By</option>
                <option value="1">Priority</option>
                <option value="2">Asignee</option>
                <option value="3">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* first method */}
      <div className="task-container">
        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title todo">Todo List</h3>
            {taskList &&
              taskList.map((obj, index) => (
                <Card
                  taskObj={obj}
                  index={index}
                  key={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title inprogress">In Progress</h3>
          </div>
          <div className="todos_list">
            <h3 className="todo_title complete">Completed</h3>
          </div>
        </div>

        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>

      {/* second method */}
      <div className="App">
      <div className="container">
      
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Todo"
            name="text"
          />
          <button type="button" className="btn" onClick={() => addTodo()}>
          Add a task
            <FaPlusCircle className="icon" />
          </button>
        </form>

        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title">Todos List</h3>
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
  );

      </div>
    </>
  );
};

export default TodoList;
