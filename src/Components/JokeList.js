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
    this.changeRating = this.changeRating.bind(this);
  }
  componentDidMount() {
    axios
      .get(`${url}${params}`, {
        headers: { Accept: "application/json" }
      })
      .then(res => {
        let data = res.data;
        let jokeList = data.results.map((d, i) => {
          d.rating = 0;
        });
        this.setState({ currentPage: data.current_page, jokes: data.results });
      });
  }
  changeRating(id, direction) {
    this.state.jokes.map(j => {
      if (direction === "up" && j.id === id) {
        j.rating += 1;
      } else if (direction === "down" && j.id === id) {
        j.rating -= 1;
      }
    });
    let newSort = this.state.jokes.sort((a, b) => {
      return b.rating - a.rating;
    });
    this.setState({ jokes: newSort });
  }
  render() {
    let jokes = this.state.jokes.map(joke => {
      return (
        <Joke
          key={joke.id}
          id={joke.id}
          text={joke.joke}
          changeRating={this.changeRating}
          rating={joke.rating}
        />
      );
    });
    return (
      <div className="JokeList">
        <div></div>
        <div>{jokes}</div>
      </div>
    );
  }
}

export default JokeList;
