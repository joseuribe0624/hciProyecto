import React, { Component } from 'react';
import './Subjects.css';
import user from "./assets/user.png";
import notification from "./assets/notification.png"

class subjects extends Component {

  render() {
    return (
    <div className="back">
      <nav className="navbar navbar-light backNav" >
        <a className="title" href="#">
          Memo
        </a>
        <div>
          <img src={notification} 
            width="35" height="35"  className="d-inline-block align-top " alt="" />
          <img src={user} 
            width="40" height="40"  className="d-inline-block align-top " alt="" />
        </div>
      </nav>
    </div>
    );
  }
}

export default subjects;
