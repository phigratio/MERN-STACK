function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container items-container">
      <div className="row muqtu-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger muqtu-Button">
            Delete
          </button>
        </div> 
      </div>
    </div>
  );
}
TodoItem.propTypes;
export default TodoItem;
