import React, { Component } from 'react';


class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: ''
                  }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = event.target;
    
  }

  render() {
    return {
      <div className="log-in">
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="Email"
              type='text'
              value="Email"
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
              <input
              name="Password"
              type='text'
              value="Password"
              onChange={this.handleChange} />
          </label>
      </div>
    }
  }
}

export default LogInForm;
