import React from "react";

import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="Search">Search for puppy type</label>
          <input
            type="name"
            className="form-control"
            id="dog"
            aria-describedby="emailHelp"
          />
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}
