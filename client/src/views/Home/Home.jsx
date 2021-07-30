import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllTodos } from "../../services/todos.js";
import { Link } from "react-router-dom";

export default function Home(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);
// makes our edits happen only for the userid
  const displayEditLink = (todo) => {
  if (todo.userId === props.user?.id) {
    return <Link to={`/edit-todo/${todo_id}`}>Edit</Link>
  }
}


  return (
    <Layout user={props.user} setUser={props.setUser}>
      {todos.map((todo) => (
        <div key={todo._id}>{todo.name} {displayEditLink()}</div>
      ))}
    </Layout>
  );
}