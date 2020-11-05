import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
          <NavTabs />
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/discover"><Discover/></Route>
          <Route path="/search"><Search/></Route>
          <Route path="/"><About/></Route>
        </Switch>
    </Router>
  );
}

export default App;
