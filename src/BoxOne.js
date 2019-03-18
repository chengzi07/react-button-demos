import React, { Component } from 'react';
import './BoxOne.css'

class X extends Component {
  render() {
    return (
      <div className="BoxOne">
        <div>{this.props.firstLine||'Box1'}</div>
        <div>Box 50</div>
      </div>
    );
  }
}

export default X;
