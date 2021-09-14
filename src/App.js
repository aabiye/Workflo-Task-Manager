import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaCheck, FaPlusCircle, FaTrash } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3 className="title">WorkFlo</h3>
        <form className="form_todo">
          <input
            type="text"
            className="form_control"
            placeholder="Enter To Do"
            name="text"
          />
          <button type="button" className="btn">
            <FaPlusCircle className="icon" />
          </button>
        </form>

        <CardGroup className="todos_wrapper">
 
          <Card>
            <Card.Body>
              <Card.Title>TO DO</Card.Title>
              <Card.Text>TASK</Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>IN PROGRESS</Card.Title>
              <Card.Text>TASK</Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>COMPLETED</Card.Title>
              <Card.Text>TASK</Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </Card.Footer>
          </Card>
        </CardGroup>
        {/* <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todos_title">Todos List</h3>
            <div className="todos_card">
              <p className="card_text">Task</p>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </div>
          </div>
          <div>
            <div className="todos_list">
              <h3 className="todos_title">In Progress</h3>
              <div className="progress_card">
                <p className="card_text">Task</p>
                <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
              </div>
            </div>
            <div className="todos_list">
              <h3 className="todos_title">Completed</h3>
              <div className="completed_card">
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    
  );
}

export default App;
