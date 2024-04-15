import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    
    getStudentData = async()=>{
        const res = await axios.get('/api1/students')
        console.log(res.data);
    }
    getCarData = async()=>{
        const res = await axios.get('/api2/cars')
        console.log(res.data);
    }

    render() {
        return (
        <div>
            <button onClick={this.getStudentData}>点我获取学生数据</button>
            <button onClick={this.getCarData}>点我获取汽车数据</button>
        </div>
        )
    }
}
