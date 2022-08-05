import React from "react";
import TodoList from "./components/TodoList";
import UserImg from "./components/UserImg";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <UserList />
      <hr/>
      <TodoList/>
      <UserImg/>
    </div>
  )
}

export default App;