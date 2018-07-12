import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import News_detail from "./News_detail";

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
            <Route exact path="/news/:index" component={News_detail}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;