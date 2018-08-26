import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import UsersTable from '../components/UsersTable';
import SortControl from '../components/SortControl';

class Users extends Component {
  componentDidMount() {
    const { users, onRequestUsers, page, sortBy, order } = this.props;
    if(!users.length){
      onRequestUsers(page, sortBy, order);
    }
  }

  render() {
    const { fetching, users, error, page, totalPages } = this.props;
    return (
      <div className="Users">
        { fetching ? (
          <p>Cargando...</p>
        ) : ( error ? (
          <p>Ha ocurrido un error</p>
        ) : ([
            <UsersTable users={users} key="0">
              <span>Avatar</span>
              <span>
                <SortControl
                  onChanged={this.changeSort('name').bind(this)}
                  order={this.getOrder('name')}>
                  Nombre
                </SortControl>
              </span>
              <span>
                <SortControl
                  onChanged={this.changeSort('lastName').bind(this)}
                  order={this.getOrder('lastName')}>
                  Apellidos
                </SortControl>
              </span>
              <span>
                <SortControl
                  onChanged={this.changeSort('country').bind(this)}
                  order={this.getOrder('country')}>
                  País
                </SortControl>
              </span>
            </UsersTable>,
            <Pagination
              key="1"
              totalPages={totalPages}
              currentPage={page}
              onPageChanged={this.changePage.bind(this)}>
            </Pagination>
        ]
        ))} 
      </div>
    );
  }

  changePage(newPage){
    this.props.onRequestUsers(newPage, this.props.sortBy, this.props.order);
  }

  changeSort(sortBy){
    return (newOrder) => {
      this.props.onRequestUsers(this.props.page, sortBy, newOrder);
    }
  }

  getOrder(sortName){
    if(sortName !== this.props.sortBy) return null;
    return this.props.order;
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    users: state.users,
    error: state.error,
    page: state.page,
    totalPages: state.totalPages,
    sortBy: state.sortBy,
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestUsers: (page, sortBy, order) => {
      dispatch({ type: 'API_USERS_REQUEST', page, sortBy, order })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);