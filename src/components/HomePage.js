import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <div className="jumbotron_1">
              <h1 style={{position:"relative"}}>Welcome to Chat Room!</h1>
              </div>
              
            </div>
            <div className="haha">
            <p><a className="btn btn-success btn-lg" style={{backgroundColor:"grey", border:"none"}} href="#/login" role="button">LOG IN RIGHT NOW</a></p>
          </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default HomePage;



         
