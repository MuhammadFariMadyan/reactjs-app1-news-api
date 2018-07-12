import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import NewsDetail from "./components/NewsDetail";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Web News Portal </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/news">News Aljazair</NavLink></li>
          </ul>
          <h2> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ </h2>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/news/:index" component={NewsDetail}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;