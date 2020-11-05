import React, { Component } from "react";
import axios from "axios";

const styles = {
    imageStyle: {
        width: "18rem"
    }
} 

export default class Discover extends Component {
  state = {
    results: [],
    match: false,
    count: 0
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => this.setState({ results: res.data.message }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <div className="card" style={styles.imageStyle}>
          <img alt="dog" className="img-fluid" src={this.state.results} />
          <button className="card-btn pass" dataValue="pass">badPuppy</button>
          <button className="card-btn accept" dataValue="accept">goodPuppy</button>
          <p>Count: {this.state.count}</p>
        </div>
      </div>
    );
  }
}

// pass button onClick count +
// 
