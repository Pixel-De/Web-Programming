import React, { useEffect, useState } from "react";
import axios from "axios";

const EditExercises = () => {
  const [exercises, setExercises] = useState([{}]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => setExercises(res.data));
  });
  const onclick = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then(() => window.alert("amjilttai ustlaa !"));
  };

  return (
    <div>
      <h3>Edit exercises</h3>
      {exercises.map((e) => (
        <div>
          {e.username + " ni " + e.description + "gesen plantai."}
          <button onClick={() => onclick(e._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default EditExercises;
