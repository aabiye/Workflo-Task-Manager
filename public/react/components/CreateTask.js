import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({
  modal,
  toggle,
  save,
  addTodo,
  taskName,
  description,
  assignedTo,
  dueDate,
  priorityLevel,
  setTaskName,
  setDescription,
  setAssignedTo,
  setDueDate,
  setPriorityLevel,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "assignedTo") {
      setAssignedTo(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "dueDate") {
      setDueDate(value);
    } else {
      setPriorityLevel(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["AssignedTo"] = assignedTo;
    taskObj["Description"] = description;
    taskObj["DueDate"] = dueDate;
    taskObj["PriorityLevel"] = priorityLevel;
    save(taskObj);
    addTodo();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="form-lable required">Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <br />
          <div className="form-group">
            <label className="form-lable">Task Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <label className="Priority">Assigned To</label>
            <select
              className="select"
              value={assignedTo}
              onChange={handleChange}
              name="assignedTo"
            >
              <option value="0">Select:</option>
              <option value="Aden Abiye">Aden Abiye</option>
              <option value="Ayman Zaki">Ayman Zaki</option>
              <option value="Ashley Umetsu">Ashley Umetsu</option>
              <option value="Dan Sohval">Dan Sohval</option>
              <option value="Linda Eng">Linda Eng</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label className="form-lable">Due Date</label>
            <input
              type="date"
              className="date"
              value={dueDate}
              onChange={handleChange}
              name="dueDate"
            ></input>

            <label className="Priority">Priority Level</label>
            <select
              className="select"
              value={priorityLevel}
              onChange={handleChange}
              name="priorityName"
            >
              <option value="0">Select:</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Submit
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
