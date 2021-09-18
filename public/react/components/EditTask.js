import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setAssignedTo(taskObj.AssignedTo);
    setDueDate(taskObj.DueDate);
    setPriorityLevel(taskObj.PriorityLevel);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    taskObj["AssignedTo"] = assignedTo;
    taskObj["DueDate"] = dueDate;
    taskObj["PriorityLevel"] = priorityLevel;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Assigned To</label>
          <input
            type="text"
            className="form-control"
            value={assignedTo}
            onChange={handleChange}
            name="assignedTo"
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            className="date"
            value={dueDate}
            onChange={handleChange}
            name="dueDate"
          />
          <label>Priority Level</label>
          <select
            className="select"
            value={priorityLevel}
            onChange={handleChange}
            name="priorityName"
          >
            <option value="0">Select:</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
