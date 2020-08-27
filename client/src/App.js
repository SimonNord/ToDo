import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import NewTodoInput from "./components/NewTodoInput/NewTodoInput";
import "./App.css";
const axios = require("axios");

function App() {
  const [list, setList] = useState([]);
  const [newPost, setNewPost] = useState("");

  // function that fetches data from API.
  const getTodoList = async () => {
    const result = await axios("http://localhost:5000/todos");
    setList(result.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postNewTodo = async () => {
      await axios.post("http://localhost:5000/todos", {
        text: newPost,
      });
      setNewPost("");
    };
    postNewTodo();
  };

  const handleChange = (event) => {
    setNewPost(event.target.value);
  };

  const onRemoveItem = (event) => {
    const itemIdToRemove = event.target.id;
    const deleteToDo = async () => {
      await axios.delete(`http://localhost:5000/todos/${itemIdToRemove}`);
    };
    deleteToDo();
  };

  // on component mount and update, get api data again.
  useEffect(() => {
    getTodoList();
  }, [list]);

  return (
    <div className="App">
      <div className="toDoContent">
        <h1>To-Do list</h1>
        <NewTodoInput
          newPost={newPost}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TodoList list={list} onRemoveItem={onRemoveItem} />
      </div>
    </div>
  );
}

export default App;
