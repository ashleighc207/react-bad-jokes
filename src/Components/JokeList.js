import React, { Component } from "react";
import "./JokeList.css";
import Joke from "./Joke.js";
import uuid from "uuid/v4";
import axios from "axios";
const url = "https://icanhazdadjoke.com/";
const params = "search?limit=10";

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      currentPage: 0
    };
  }
  componentDidMount() {
    axios
      .get(`${url}${params}`, {
        headers: { Accept: "application/json" }
      })
      .then(res => {
        let data = res.data;
        this.setState({ currentPage: data.current_page, jokes: data.results });
      });
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
