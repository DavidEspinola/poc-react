import React, { Component } from 'react';
import './SortControl.css';

class SortControl extends Component {
  render() {

    const { order, children } = this.props;

    return (
      <a className="SortControl" href="" onClick={this.onClick.bind(this)}>
        { children } { this.sortArrow(order) }
      </a>
    );
  }

  onClick(e){
    e.preventDefault();
    console.log(this.props)
    this.props.onChanged(this.props.order === 'asc' ? 'desc' : 'asc');
  }

  sortArrow(order){
    if(!order) return <span></span>;
    return order === 'asc' 
      ? <span>&darr;</span>
      : <span>&uarr;</span>
  }
}

export default SortControl;