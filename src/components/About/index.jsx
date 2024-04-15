import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log("About收到的props是：",this.props);
    return (
      <div>
        <h3>我是About的内容</h3>
      </div>
    )
  }
}
