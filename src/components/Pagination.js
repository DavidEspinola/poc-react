import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
  render() {

    const { totalPages, currentPage } = this.props;

    const pages = [];
    for(let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div className="Pagination">
        <ul>
          {pages.map(page => (
            <li key={ page } className={ page === currentPage ? 'selected' : ''}>
              <a href="" onClick={(e) => this.onPageClick(e, page)}>{ page }</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  onPageClick(e, newPage){
    e.preventDefault();
    if(newPage !== this.props.page){
      this.props.onPageChanged(newPage);
    }
  }
}

export default Pagination;