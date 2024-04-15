import React from "react";
import Hello from "./components/Hello"
import Welcome from "./components/Welcome";

// 创建并暴露“外壳”组件App
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}