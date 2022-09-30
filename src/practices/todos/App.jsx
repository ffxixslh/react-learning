import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { TodoProvider } from "./todoContext";

const App = () => {
  console.log("App render");
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
