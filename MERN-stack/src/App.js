import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

const App = () => {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
};

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h3>Exercises</h3>
      </Link>
      <Link to="/create">
        <h3>Create Exercise Log</h3>
      </Link>
      <Link to="/user">
        <h3>Create User</h3>
      </Link>
      <Link to="/edit">
        <h3>Edit exercise</h3>
      </Link>
    </div>
  );
};

export default App;
