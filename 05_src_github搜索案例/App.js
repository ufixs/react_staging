import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        users:[], //初始化状态,users初始值为空数组
        isFirst:true, //是否是第一次加载
        isLoading:false, //表示是否处于加载界面
        err:'', //存储请求错误信息

    }
    // 更新App的State
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
