import React, { Component } from "react";
import Display from "./display";

class GeneralInformation extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      generalInfor: "",
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
      generalInfor: { ...this.state, [e.target.name]: e.target.value },
    });
  };

  render() {
    const { name, surname, email, phone } = this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              onChange={this.handleChange}
              value={surname}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              value={phone}
            />
          </div>
        </fieldset>
        <button type="submit">Add Personal Information</button>
      </form>
    );
  }
}

export default GeneralInformation;
