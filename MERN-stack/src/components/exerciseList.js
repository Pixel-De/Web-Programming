import React, { Component } from "react";
import axios from "axios";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((ress) => {
      if (ress.data.length) {
        this.setState({
          users: ress.data.map((user) => user.username),
          username: ress.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(() => console.log("Added!"));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username : </label>
          <select
            required
            value={this.state.username}
            onChange={this.onChangeUsername}
          >
            {this.state.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
          <br />
          <label>description:</label>
          <input type="text" onChange={this.onChangeDescription} />
          <br />
          <label>Duration (in minutes) </label>
          <input
            type="number"
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />
          <br />
          <div>
            <Datepicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <input
            type="submit"
            value="Create Exercise Log"
            style={{ color: "white", background: "blue" }}
          />
        </form>
      </div>
    );
  }
}
