import React, { Component } from 'react'
import PropTypes from "prop-types"
import './Item.css'

export default class Item extends Component {
    // 对props进行限制
    static propTypes = {
        // updateTodo必须为函数，且必须传递
        updateTodo:PropTypes.func.isRequired,
        // delectTodo必须为函数，且必须传递
        delectTodo:PropTypes.func.isRequired,
    }
    // 鼠标移入移出
    state = {mouse:false}
    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        this.setState({mouse:flag})
    }
    // 勾选、取消勾选的回调
    handleCheck = (event,id) => {
    //   console.log(id,event.target.checked);
        this.props.updateTodo(id,event.target.checked)
    }
    // 删除的回调
    handleDelect = (id) => {
        if(window.confirm(`确定删除${this.props.name}吗？`)){
            this.props.delectTodo(id)
        }
    }
    
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return ( 
            <li style={{backgroundColor:mouse ? '#add' : 'white'}} onMouseLeave={()=>{this.handleMouse(false)}} onMouseEnter={()=>{this.handleMouse(true)}}>
                <label>
                    <input type="checkbox" checked={done} onChange={(event)=>{this.handleCheck(event,id)}}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelect(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
            
        )
    }
}
