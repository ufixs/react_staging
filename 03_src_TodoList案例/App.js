import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'

export default class App extends Component {
    state = {todos:[
        {id:'001',name:'吃饭',done:true},
        {id:'002',name:'睡觉',done:true},
        {id:'003',name:'打代码',done:false},
        {id:'004',name:'逛街',done:true},
    ]}
    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        // console.log(todoObj);   
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj,...todos]
        // 更新状态
        this.setState({todos:newTodos});
    }
    // updateTodo用于更新一个todo对象
    updateTodo = (id,done) => {
        // 获取原todos
        const {todos} = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj)=>{
          if(todoObj.id===id) return {...todoObj,done}
          else return todoObj
        })
        this.setState({todos:newTodos})
    }
    // delectTodo用于删除一个todo对象
    delectTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
          return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    // 全选
    checkAllTodo = (flag) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:flag}
        })
        this.setState({todos:newTodos})
    }
    // 清除所有已完成的任务
    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
          return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    
    render() {
        const {todos} = this.state
        return (
        <div>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} delectTodo={this.delectTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        </div>
        )
    }
}
