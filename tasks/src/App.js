import React from "react";
import TodoList from "./componets/Todo/TodoList";
import context from "./componets/context";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Взять маркеры" },
    { id: 2, completed: false, title: "Отдать маркеры" },
    { id: 3, completed: false, title: "Починить интернет" },
  ]);

  function toggleTodo(id) {
    //переделать!
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    //условие completed???
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <context.Provider value={{ removeTodo }}>
      <div className="taskApp">
        <h1>Tasks to complete</h1>
        <h2>
          {todos.length > 0 ? "Remain: " + todos.length : "All tasks done!"}
        </h2>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>А маркеры точно взял?</p>
        )}
      </div>
    </context.Provider>
  );
}

export default App;
