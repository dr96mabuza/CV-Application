import React, { Component } from "react";
import Display from "./display";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      surname: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <legend>Personal Details</legend>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div>
              <label>surname</label>
              <input
                type="text"
                name="surname"
                onChange={this.handleChange}
                value={this.state.surname}
              />
            </div>
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>
        <Display name={this.state.name} surname={this.state.surname} />
      </div>
    );
  }
}

export default Form;
