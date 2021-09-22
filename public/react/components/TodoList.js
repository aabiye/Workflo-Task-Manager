import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Card from "./Card";
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";



const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   let arr = localStorage.getItem("taskList");

  //   if (arr) {
  //     let obj = JSON.parse(arr);
  //     setTaskList(obj);
  //   }
  // }, []);

  // const deleteTask = (index) => {
  //   let tempList = taskList;
  //   tempList.splice(index, 1);
  //   localStorage.setItem("taskList", JSON.stringify(tempList));
  //   setTaskList(tempList);
  //   window.location.reload();
  // };

  // const updateListArray = (obj, index) => {
  //   let tempList = taskList;
  //   tempList[index] = obj;
  //   localStorage.setItem("taskList", JSON.stringify(tempList));
  //   setTaskList(tempList);
  //   window.location.reload();
  // };

  
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

  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");

  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      taskName: taskName,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      priorityLevel: priorityLevel,
    };
    setTodos([todo, ...todos]);
    console.log(todo);
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

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <>
      <div className="header">
        <h3 className="title">
          WORK<span class="flo">FLO</span>
        </h3>
        <div class="row">
          <div class="col">
            <div class="taskbtn">
              <button
                className="btn btn-outline-primary btn-lg btn-block rounded-pill"
                onClick={() => setModal(true)}
              >
                Create a Task
              </button>
            </div>
          </div>
          <div>
            <div></div>
          </div>
          <div class="col">
            <div class="input-group" id="search-container">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search for a task"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-outline-primary">
                Search
              </button>
            </div>
          </div>
          <div class="col">
            <div class="select-header">
              <select
                class="form-select form-select-lg"
                aria-label="select something"
              >
                <option selected>Filter By</option>
                <option value="1">Priority</option>
                <option value="2">Asignee</option>
                <option value="3">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="task-container">
        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title todo">Todos List</h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
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
            <h3 className="todo_title inprogress">InProgress</h3>
            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
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
            <h3 className="todo_title complete">Completed</h3>
            {completed.map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <FaTrash
                  onClick={() => deleteCompleted(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateTask
        toggle={toggle}
        modal={modal}
        save={saveTask}
        addTodo={addTodo}
        taskName={taskName}
        description={description}
        assignedTo={assignedTo}
        dueDate={dueDate}
        priorityLevel={priorityLevel}
        setTaskName={setTaskName}
        setDescription={setDescription}
        setAssignedTo={setAssignedTo}
        setDueDate={setDueDate}
        setPriorityLevel={setPriorityLevel}
      />
    </>
  );
};

export default TodoList;
