import { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import SignUp from "./views/SignUp/SignUp";
import SignIn from "./views/SignIn/SignIn";
import { verify } from "./services/users";
import NewTodo from "./views/NewTodo/NewTodo";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    };
verifyUser()
  }, []);

 
  return (
    <div className="App">
      
      {/* route all todos */}
      <Route exact path="/">
        <Home user={user} setUser={setUser} />
      </Route>
      {/* route a single todo */}
      {/* route create todo */}
      {user && (
        
      <Route path="/new-todo">
      <NewTodo user={user} setUser={setUser}/>
        </Route>
      )}
      
      {!user && (
      <div>
      {/* route sign in */}
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user} />
          </Route>
          
      {/* route sign up */}
      <Route path="/sign-up">
        <SignUp setUser={setUser} user={user} />
      </Route>
        </div>
      )}
      
    </div>
  );
}

export default App;