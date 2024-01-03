function AddTodo() {
  return (
    <div className="container items-container">
      <div className="row muqtu-row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div className="col-sm-4">
          <input type="date"></input>
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success muqtu-Button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
