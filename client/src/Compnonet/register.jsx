import React from 'react';
import axios from 'axios';
import "./register.css"

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:8000/register', user)
      .then(response => {
        console.log(response);
        // Clear the input fields
        this.setState({
          name: '',
          email: '',
          password: ''
        });

        // Show an alert message
        window.alert('Registration completed successfully!');
      })
      .catch(error => {
        console.log(error);
        window.alert('Registration failed. Please try again.');
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleNameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />

        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Register;
