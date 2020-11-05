import React, { Component } from "react";
import axios from "axios";
import ResultList from "../ResultList"

export default class Search extends Component {
  state = {
    results: [],
    search:""
  };

  componentDidMount() {
    // console.log("something is happening")
    // this.dogSearch("hound");
  }

  dogSearch = (query) => {
    axios
      .get(`https://dog.ceo/api/breed/${query}/images`)
      .then((res) => this.setState({ results: res.data.message}))
      .catch((err) => console.log(err));
  };

  render() {
    return (
        <div>
      <form>
        <div className="form-group">
          <label htmlFor="Search">Search by Breed</label>
          <input
            type="name"
            className="form-control"
            placeholder="Search for a Breed"
            id="dog"
          />
          <button onClick={this.dogSearch} type="submit" className="btn btn-primary">
            Search Puppies
          </button>
        </div>
      </form>
        <ResultList results={this.state.results}/>
        </div>
    );
  }
}
