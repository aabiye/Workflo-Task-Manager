import React, { useEffect, useState } from "react";
import CreateTaskPopup from "./CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const [taskList, setTaskList] = useState([]);

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

  return (
    <>
      <div className="header">
        {/* <h2 className="title">
          WORK<span className="flo">FLO</span>
        </h2> */}
        <div className="row">
          <div className="col">
            <div className="taskbtn">
              <button
                className="btn btn-outline-dark btn-block rounded-pill"
                id="creatTaskBtn"
                onClick={() => setModal(true)}
              >
                Create a Task
              </button>
            </div>
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
              <select className="form-select" aria-label="select something">
                <option defaultValue>Filter By</option>
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
            <h3 className="todo_title todo">To Do</h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <i
                  className="bx bxs-check-square"
                  onClick={() => addToProgress(item.id)}
                ></i>
                <i
                  className="bx bxs-trash"
                  onClick={() => deleteTodo(item.id)}
                ></i>
              </div>
            ))}
          </div>

          <div className="todos_list">
            <h3 className="todo_title inprogress">In Progress</h3>
            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <i
                  className="bx bxs-check-square"
                  onClick={() => addtoCompleted(item.id)}
                ></i>
                <i
                  className="bx bxs-trash"
                  onClick={() => deleteInProgress(item.id)}
                ></i>
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
                <i
                  className="bx bxs-trash"
                  onClick={() => deleteCompleted(item.id)}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CreateTaskPopup
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
