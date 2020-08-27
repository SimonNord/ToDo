import React from "react";

const TodoItem = ({ text, onRemoveItem, id }) => {
  return (
    <div className="todoItem">
      <span>{text}</span>
      <button onClick={onRemoveItem} id={id} className="deleteButton">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
