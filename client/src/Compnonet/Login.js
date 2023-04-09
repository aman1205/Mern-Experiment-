import React from 'react';
import axios from 'axios';
import "./login.css"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:8000/login', user)
      .then(response => {
        console.log(response);
        // Save the JWT token in local storage
        // localStorage.setItem('token', response.data.token);
        // // Redirect the user to the home page
        // this.props.history.push('/register');
      })
      .catch(error => {
        console.log(error);
        alert('Login failed. Please try again.');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />

        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
