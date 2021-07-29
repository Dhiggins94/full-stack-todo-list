import './App.css';
import { Route } from "react-router-dom"
import Home from "./views/Home/Home"
function App() {
  return (
    <div className="App">
      {/* route for all todos */}
      <Route path="/"> <Home /> </Route>
      {/* route for a single todo */}
      {/* route for create todo */}
      {/* route for login */}
      {/* route for sign-up */}
    </div>
  );
}

export default App;
