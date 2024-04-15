import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = async ()=>{
        // 获取用户输入（连续结构赋值+重命名）
        const {keyWordElement:{value:keyWord}} = this
        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        // 发送网络请求
        try{
            const res = await axios.get(`/api/search/users?q=${keyWord}`)
            this.props.updateAppState({isLoading:false,users:res.data.items})
        }catch(error){
            this.props.updateAppState({isLoading:false,err:error.message})
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={(e)=>{this.keyWordElement = e}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
