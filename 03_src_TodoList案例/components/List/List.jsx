import React, { Component } from 'react'
import PropTypes from "prop-types"
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
    
    // 对props进行限制
    static propTypes = {
        // todos必须为数组，且必须传递
        todos:PropTypes.array.isRequired,
        // updateTodo必须为函数，且必须传递
        updateTodo:PropTypes.func.isRequired,
        // delectTodo必须为函数，且必须传递
        delectTodo:PropTypes.func.isRequired,
    }

    render() {
        const {todos,updateTodo,delectTodo} = this.props
        return (
        <div>
            <ul className="todo-main">
                {
                    todos.map((item) => {
                            return <Item  key={item.id} {...item} updateTodo={updateTodo} delectTodo={delectTodo}/>
                        }
                    )
                }
            </ul>
        </div>
        )
    }
}
