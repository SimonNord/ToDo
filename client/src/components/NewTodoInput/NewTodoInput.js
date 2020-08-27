import React from "react";

const NewTodoInput = ({ newPost, handleChange, handleSubmit }) => {
  return (
    <form className="newTodoForm" onSubmit={handleSubmit}>
      <input
        className="newToDoInput"
        onChange={handleChange}
        value={newPost}
        type="text"
        name="text"
        placeholder="Add new to-do"
      />
      <button hidden className="submitTodo" type="submit">
        Add todo
      </button>
    </form>
  );
};

export default NewTodoInput;
