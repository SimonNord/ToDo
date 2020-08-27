import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ list, onRemoveItem }) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <TodoItem
            key={item._id}
            id={item._id}
            text={item.text}
            onRemoveItem={onRemoveItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
