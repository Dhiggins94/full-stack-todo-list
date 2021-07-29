import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../services/users";
export default function Nav(props) {

  const handleSignOut = () => {
    signOut(); 
  props.setUser(null)
}

  return (
    <div>
      <Link to="/">Todos</Link>
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to="new-todo">Create a new Todo</Link>
          <button onClick={handleSignOut}>Sign Out</button>
          <button>Sign In</button>
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  );
}