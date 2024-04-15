import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    search = async()=>{
        // 获取用户输入（连续结构赋值+重命名）
        const {keyWordElement:{value:keyWord}} = this
        // 发送请求前通知List更新状态
        PubSub.publish('atguigu',{isFirst:false,isLoading:true})
        //#region 发送网络请求--使用axios发送
        /*try{
            const res = await axios.get(`/api/search/users2?q=${keyWord}`)
            PubSub.publish('atguigu',{isLoading:false,users:res.data.items})
        }catch(error){    
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
        }*/
        //#endregion
        
        //#region 发送网络请求--使用fetch发送 （未优化）
        /* fetch(`/api/search/users2?q=${keyWord}`).then(
            response =>{
                console.log('联系服务器成功了');
                return response.json()
            },
            error =>{
                console.log('失败了',error);
                return new Promise(()=>{})
            }
        ).then(
            response => {console.log('获取数据成功了',response)},
            error => {console.log('获取数据失败了',error)}
        ) */
        //#endregion
        
        // 发送网络请求--使用fetch发送 （优化）
        try{
            const res = await fetch(`/api/search/users2?q=${keyWord}`)
            const data = await res.json()
            PubSub.publish('atguigu',{isLoading:false,users:data.items})
        }catch(error){
            PubSub.publish('atguigu',{isLoading:false,err:error.message})
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
