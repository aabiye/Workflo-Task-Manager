import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";


const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  
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
        <div className="row">
          <div className="col">
            <div className="taskbtn">
              <button
                className="btn btn-outline-dark btn-block rounded-pill" id="creatTaskBtn"
                onClick={() => setModal(true)}
              >
                Create a Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="todos_wrapper row" id="todoWrapper">
          <div className="todos_list col-sm-4" id="todo-card">
            <h3 className="todo_title todo">To Do</h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <i className='bx bxs-check-square' onClick={() => addToProgress(item.id)}></i>
                <i className='bx bxs-trash' onClick={() => deleteTodo(item.id)}></i>
              </div>
            ))}
          </div>

          <div className="todos_list col-sm-4" id="inProgress-card">
            <h3 className="todo_title inprogress">In Progress</h3>
            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.key}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <i className='bx bxs-check-square' onClick={() => addtoCompleted(item.id)}></i>
                <i className='bx bxs-trash' onClick={() => deleteInProgress(item.id)}></i>
              </div>
            ))}
          </div>
          <div className="todos_list col-sm-4" id="complete-card">
            <h3 className="todo_title complete">Completed</h3>
            {completed.map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.taskName}</p>
                <p className="card_text">{item.description}</p>
                <p className="card_text">{item.assignedTo}</p>
                <p className="card_text">{item.dueDate}</p>
                <p className="card_text">{item.priorityLevel}</p>
                <i className='bx bxs-trash' onClick={() => deleteCompleted(item.id)}></i>
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
