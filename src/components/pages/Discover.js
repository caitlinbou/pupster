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
        </div>
      </div>
    );
  }
}

//
