import React, { Component } from 'react'
import PropTypes from "prop-types"
import { nanoid } from 'nanoid'
import './Header.css'

export default class Header extends Component {

  // 对props进行限制
  static propTypes = {
    // addTodo必须为函数，且必须传递
    addTodo:PropTypes.func.isRequired,
  }
  
  // 键盘事件的回调
  handleKeyUp = (event) => {
    // 解构赋值
    const {target,keyCode} = event
    // 判断是否keyCode是否为回车键
    if(keyCode !== 13) return
    // 输入的todo不能为空
    if(target.value.trim() === ''){
      alert("输入不能为空")
      return
    }
    // 准备一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    // 向父组件App传值
    this.props.addTodo(todoObj)
    // 清空输入框
    target.value = ''
  }

  render() {
    return (
      <div>
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    )
  }
}
