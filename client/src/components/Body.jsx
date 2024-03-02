import PropTypes from 'prop-types';
import { useState } from 'react';

export const Body = ({
  showForm,
  todoState,
  todoItems,
  handleShowForm,
  handleCreateTodo,
  handleTodoState,
  handleDeleteTodo
}) => {
  const [formData, setFormData] = useState({ task: '', time: '' });

  const handleForm = (e) => {
    e.preventDefault();

    const newTodo = {
      task: formData.task,
      time: formData.time,
    };

    handleCreateTodo(newTodo);
    handleTodoState();
    handleShowForm();
    setFormData({ task: '', time: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id="app-body">
      <div className="todo-container">
        <div className="new-todo-container">
          {!showForm ? <h1>Add New Todo...</h1> : ''}
          {showForm && (
            <>
              <h3>New Todo:</h3>
              <form onSubmit={handleForm}>
                <label htmlFor="task">Task:</label>
                <input
                  type="text"
                  name="task"
                  value={formData.task}
                  placeholder="Enter Todo Name..."
                  onChange={handleChange}
                  required
                />

                <label htmlFor="time">Date/Time:</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  placeholder="Date: Time..."
                  onChange={handleChange}
                  required
                />

                <input
                  className="submit-btn"
                  type="submit"
                  value="CREATE TODO"
                />
              </form>
            </>
          )}
        </div>

        <br />

        <div className="todo-display">
          <h3>Current Todos:</h3>
          {!todoState ? (
            <h3>None...</h3>
          ) : (
            <>
              {todoItems.map((todo, index) => (
                <div key={index} className="todo-item" onClick={() => {handleDeleteTodo(index)}}>
                  <h4>{todo.task}</h4>
                  <p>{todo.time}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

Body.propTypes = {
  handleShowForm: PropTypes.func,
  showForm: PropTypes.bool,
  todoState: PropTypes.bool,
  handleCreateTodo: PropTypes.func,
  todoItems: PropTypes.array,
  handleTodoState: PropTypes.func,
  handleDeleteTodo: PropTypes.func
};