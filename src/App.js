import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <switch>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
