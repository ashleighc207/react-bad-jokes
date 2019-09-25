import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    let direction = "";
    evt.target.classList.contains("fa-arrow-down")
      ? (direction = "down")
      : (direction = "up");
    this.props.changeRating(this.props.id, direction);
  }
  render() {
    let jokeReaction =
      this.props.rating > 40
        ? "fa-grin-squint-tears"
        : this.props.rating > 20
        ? "fa-grin-tears"
        : this.props.rating > 10
        ? "fa-laugh-beam"
        : this.props.rating > 0
        ? "fa-smile"
        : this.props.rating === 0
        ? "fa-meh"
        : this.props.rating < 0 && this.props.rating > -30
        ? "fa-surprise"
        : "fa-tired";
    return (
      <div className="Joke">
        <div className="Joke--rating_container">
          <i
            className="fas fa-arrow-up Joke--icon"
            onClick={this.handleClick}
          ></i>
          <div className="Joke--rating">{this.props.rating}</div>
          <i
            className="fas fa-arrow-down Joke--icon"
            onClick={this.handleClick}
          ></i>
        </div>
        <div className="Joke--description">{this.props.text}</div>
        <div className="Joke--scale">
          <i className={`far ${jokeReaction} Joke--laugh_scale`}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
