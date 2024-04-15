import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    // 状态
    state = {
        users:[], //初始化状态,users初始值为空数组
        isFirst:true, //是否是第一次加载
        isLoading:false, //表示是否处于加载界面
        err:'', //存储请求错误信息
    }
    // 钩子
    componentDidMount(){
        PubSub.subscribe('atguigu',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键字,随后点击搜索</h2> : 
                    isLoading ? <h2>Loading.....</h2> : 
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj)=>{
                        return(
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img alt='head_portrait' src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
