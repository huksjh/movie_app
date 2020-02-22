import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./routes/Navigation";
import "./reset.css";

function App() {
  return (
    <HashRouter>
      <Navigation />

      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
      </div>
    </HashRouter>
  );
}

export default App;
