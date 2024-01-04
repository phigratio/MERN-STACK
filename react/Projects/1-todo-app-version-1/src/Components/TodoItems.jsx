import TodoItem from "./TodoItem";
import styles from './TodoItems.module.exports';
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
TodoItems.propTypes;
export default TodoItems;
