import AppName from "./Components/AppName";
import AddTodo from "./Components/";
import TodoItems from "./Components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2023" },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
