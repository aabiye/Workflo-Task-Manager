import React from 'react';
import renderer from 'react-test-renderer';
import TodoList from './TodoList';

describe("Create Task component", () => {

  //Snapshot test: Does our Component render as expected?

    test("renders Todo List", () => {


        const component = renderer.create(<TodoList />)

        const snapshot = component.toJSON();

        console.log("What does our snapshot look like?  ", snapshot)

        expect(snapshot).toMatchSnapshot();
    })

})
