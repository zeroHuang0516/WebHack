import React, { Component } from 'react';
import LoginPage from './LoginPage';
import ChatRoomPage from './ChatRoomPage';
import UsersPage from './UsersPage';
import SingleUserPage from './SingleUserPage';
import HomePage from './HomePage';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/users') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }

    if (this.state.route === '/login') {
      return <LoginPage />;
    }

    if (this.state.route === '/chatroom') {
      return <ChatRoomPage />;
    }
    return <HomePage />;
  }

  renderBreadcrumb() {
    if (this.state.route === '/chatroom') {
      return (
      <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#/chatroom">Chatroom</a></li>
        <li><a href="#/users">Users</a></li>
      </ol>
      );
    }

    if (this.state.route === '/users') {
      return (
      <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#/chatroom">Chatroom</a></li>
        <li><a href="#/users">Users</a></li>
      </ol>
      );
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return (
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#/chatroom">Chatroom</a></li>
          <li><a href="#/users">Users</a></li>
          <li><a href={`#/users/${id}`}>{id}</a></li>
        </ol>
      );
    }

    return (
      <ol className="breadcrumb">
        <li><a href="#">Home</a></li>
        <li><a href="#/login">Login</a></li>
      </ol>
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" hrf="#/">Chat Room</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.renderBreadcrumb()}
            </div>
          </div>
        </div>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;