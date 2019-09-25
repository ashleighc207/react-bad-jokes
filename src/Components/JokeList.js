import React, { Component } from "react";
import "./JokeList.css";
import Joke from "./Joke.js";
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
          return d;
        });
        this.setState({ currentPage: data.current_page, jokes: jokeList });
      });
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
        <div className="JokeList--inner_container">
          <div className="JokeList--panel">
            <div className="JokeList--heading">Bad Jokes</div>
            <button className="JokeList--button">New Jokes</button>
          </div>
        </div>
        <div>{jokes}</div>
      </div>
    );
  }
}

export default JokeList;
