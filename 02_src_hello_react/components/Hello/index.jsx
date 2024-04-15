// {}为获取react中暴露的Component，并不是结构赋值
import {Component} from "react";
import hello from "./index.module.css"

export default class Hello extends Component{
    render(){
        return(
            <h2 className={hello.title}>hello,react!!!</h2>
        )
    }
}