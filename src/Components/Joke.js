import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke--rating_container">
          <i className="fas fa-arrow-up Joke--icon"></i>
          <div className="Joke--rating"></div>
          <i className="fas fa-arrow-down Joke--icon"></i>
        </div>
        <div className="Joke--description">Description</div>
        <div className="Joke--scale">
          <i> laugh scale </i>
        </div>
      </div>
    );
  }
}

export default Joke;
