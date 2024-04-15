import React, { Component } from 'react'
import {Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

export default class App extends Component {
  render() {
    return (
        <div>
            <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>React Router Demo</h2></div>
            </div>
            </div>
            <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    {/* 原生html中，靠<a>跳转不同的页面 */}
                    {/* <a class="list-group-item active" href="./about.html">About</a>
                    <a class="list-group-item" href="./home.html">Home</a> */}

                    {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                    <Link class="list-group-item active" to="/about">About</Link>
                    <Link class="list-group-item active" to="/home">Home</Link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                <div class="panel-body">
                    <Switch>
                        {/* 注册路由 */}
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
  }
}
