import React, { Component } from 'react';
import './email.css';

class Email extends Component {

  render() {
    return <div className="Email-container">
      <div className="Title-secondary Text-white">
        Sign up for newsletter
      </div>
      <input className="Email-input" type="email" placeholder="Email Address"/>
    </div>
      
  }
}

export default Email;