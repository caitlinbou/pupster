import React, { Component } from "react";
import axios from "axios";

const styles = {
  imageStyle: {
    width: "18rem",
  },
};

export default class Discover extends Component {
  state = {
    results: [],
    match: false,
    count: 0,
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => this.setState({ results: res.data.message }))
      .catch((err) => console.log(err));
  }

  dogPass=() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => this.setState({ results: res.data.message }))
      .catch((err) => console.log(err));
  }

  dogMatch=() => {
    const matchResult = Math.floor(Math.random() * 2);
    if (matchResult === 1) {
      this.setState({ count: this.state.count + 1 });
    }
    this.dogPass();
  }

  render() {
    return (
      <div>
        <div className="card" style={styles.imageStyle}>
          <img alt="dog" className="img-fluid" src={this.state.results} />
          <button
            onClick={this.dogPass}
            className="card-btn pass"
            dataValue="pass"
          >
            badPuppy
          </button>
          <button
            onClick={this.dogMatch}
            className="card-btn accept"
            dataValue="accept"
          >
            goodPuppy
          </button>
          <p>Count: {this.state.count}</p>
        </div>
      </div>
    );
  }
}

// pass button onClick axios call
// accept button onClick increment count
