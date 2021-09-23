import React from "react";
import renderer from "react-test-renderer";
import TodoList from "./TodoList";
import CreateTaskPopup from "./CreateTask";

describe("Create Task component", () => {
  //Snapshot test: Does our Component render as expected?

  test("renders Todo List", () => {
    const component = renderer.create(<TodoList />);

    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot);

    expect(snapshot).toMatchSnapshot();
  });

    //Behavior Test: Does our Component handle data passed in as props?

  test("Contains items passed down as props", () => {
    const taskName = ['Filter', 'Search'];
    
    const component = renderer.create(<CreateTaskPopup  taskName={taskName}/>);
    const treeEl = component.toTree()

    

    expect(treeEl.props.taskName.length).toBe(2)
  })
});
