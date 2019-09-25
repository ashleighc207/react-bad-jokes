import React, { Component } from "react";
import "./JokeList.css";
import Joke from "./Joke.js";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Joke />
      </div>
    );
  }
}

export default JokeList;
