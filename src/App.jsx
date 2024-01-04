import { useState } from "react";
import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

function App() {
  const [user, setUser] = useState(null)
  
  
  return (
    <div>
      <h1>My To Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
