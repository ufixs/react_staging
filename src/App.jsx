import React, { Component } from 'react'
import {Switch, Route, Link} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Header from './pages/Header';

export default class App extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <Header a={1}/>
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 原生html中，靠<a>跳转不同的页面 */}
                        {/* <a class="list-group-item active" href="./about.html">About</a>
                        <a class="list-group-item" href="./home.html">Home</a> */}

                        {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                        <Link className="list-group-item active" to="/about">About</Link>
                        <Link className="list-group-item active" to="/home">Home</Link>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                        <Switch>
                            {/* 注册路由 */}
                            <Route path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
