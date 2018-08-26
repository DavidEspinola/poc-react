import React, { Component } from 'react';
import './UsersTable.css';

class UsersTable extends Component {

  render() {
    const { users, children:headers } = this.props;
    return (
      <table className="UsersTable">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt="avatar"/></td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UsersTable;