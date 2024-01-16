import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container items-container">
      <div className="row muqtu-row">
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success muqtu-Button"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
AddTodo.propTypes;
export default AddTodo;
