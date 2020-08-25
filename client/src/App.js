import React, { useEffect, useState } from "react";
import "./App.css";
const axios = require("axios");

const NewTodoInput = ({ newPost, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text"> New Todo </label>
      <input onChange={handleChange} value={newPost} type="text" name="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

const TodoItem = ({ text }) => {
  return (
    <div>
      <h4>{text}</h4>
      <button>Remove</button>
    </div>
  );
};

const TodoList = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return <TodoItem key={item._id} text={item.text} />;
      })}
    </div>
  );
};

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

  // on component mount and update, get api data again.
  useEffect(() => {
    getTodoList();
  }, [newPost]);

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <NewTodoInput
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList list={list} />
    </div>
  );
}

export default App;
