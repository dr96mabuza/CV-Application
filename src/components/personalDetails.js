import React, { Component } from "react";

class GeneralInformation extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, surname, email, phone } = this.state;
    const generalInfor = { name, surname, email, phone };
    return (
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
    );
  }
}

export default GeneralInformation;
