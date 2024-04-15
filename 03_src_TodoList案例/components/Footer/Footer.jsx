import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  
  render() {
    const {todos} = this.props
    // 计算已完成
    const doneCount = todos.filter((todoObj) => {
        return todoObj.done
    }).length
    // 总数
    const total = todos.length
    return (
      <div>
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={(event)=>{this.handleCheckAll(event)}}/>
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}
