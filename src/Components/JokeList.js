import React, { Component } from "react";
import "./JokeList.css";
import Joke from "./Joke.js";
import axios from "axios";
const url = "https://icanhazdadjoke.com/";
const uuid = require("uuid/v4");

class JokeList extends Component {
  static defaultProps = {
    jokeCount: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      currentPage: 0
    };
    this.changeRating = this.changeRating.bind(this);
    this.generateNewJokes = this.generateNewJokes.bind(this);
  }
  async componentDidMount() {
    let jokeList = [];
    if (this.state.jokes.length === 0) {
      while (jokeList.length < this.props.jokeCount) {
        let res = await axios.get(`${url}`, {
          headers: { Accept: "application/json" }
        });
        jokeList.push({ id: uuid(), text: res.data.joke, rating: 0 });
      }
      this.setState({ jokes: jokeList });
      window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
    }
  }
  changeRating(id, direction) {
    let newRatings = this.state.jokes.map(j => {
      if (direction === "up" && j.id === id) {
        j.rating += 1;
      } else if (direction === "down" && j.id === id) {
        j.rating -= 1;
      }
      return j;
    });
    let newSort = newRatings.sort((a, b) => {
      return b.rating - a.rating;
    });
    console.log();
    this.setState({ jokes: newSort }, () =>
      window.localStorage.setItem("jokes", JSON.stringify(newSort))
    );
  }
  async generateNewJokes() {
    let jokeList = [];
    while (jokeList.length < this.props.jokeCount) {
      let res = await axios.get(`${url}`, {
        headers: { Accept: "application/json" }
      });
      jokeList.push({ id: uuid(), text: res.data.joke, rating: 0 });
    }
    this.setState(
      prevState => ({
        jokes: [...prevState.jokes, ...jokeList]
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  render() {
    let jokes = this.state.jokes.map(joke => {
      return (
        <Joke
          key={joke.id}
          id={joke.id}
          text={joke.text}
          changeRating={this.changeRating}
          rating={joke.rating}
        />
      );
    });
    return (
      <div className="JokeList">
        <div className="JokeList--inner_container">
          <div className="JokeList--panel">
            <div className="JokeList--heading">Bad Jokes</div>
            <button
              className="JokeList--button"
              onClick={this.generateNewJokes}
            >
              New Jokes
            </button>
          </div>
        </div>
        <div className="JokeList--jokes">{jokes}</div>
      </div>
    );
  }
}

export default JokeList;
