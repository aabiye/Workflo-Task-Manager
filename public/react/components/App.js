import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/todolist">
          <Header />
          <TodoList />
        </Route>
        <Route exact path="/about">
          <Header />
          <About />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
        </Route>
      </div>
    </Router>
  );
}

export default App;
