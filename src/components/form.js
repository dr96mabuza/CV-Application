import React, { Component } from "react";
import Display from "./display";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      institute: "",
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
      companyName: "",
      jobTitle: "",
      jobTasks: "",
      jobStartDate: "",
      jobEndDate: "",
    };

    this.state = { cv: "" };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.setState({ cv: { ...this.state, [e.target.name]: e.target.value } });

    this.setState({
      name: "",
      surname: "",
      email: "",
      phone: "",
      institute: "",
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
      companyName: "",
      jobTitle: "",
      jobTasks: "",
      jobStartDate: "",
      jobEndDate: "",
    });
  };

  render() {
    const {
      name,
      surname,
      email,
      phone,
      institute,
      courseName,
      courseStartDate,
      courseEndDate,
      companyName,
      jobTitle,
      jobTasks,
      jobStartDate,
      jobEndDate,
      cv,
    } = this.state;

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
          <fieldset>
            <legend>Education</legend>
            <div>
              <label>Institute</label>
              <input
                type="text"
                name="institute"
                onChange={this.handleChange}
                value={institute}
              />
            </div>
            <div>
              <label>Course name</label>
              <input
                type="text"
                name="courseName"
                onChange={this.handleChange}
                value={courseName}
              />
            </div>
            <div>
              <label>Course start date</label>
              <input
                type="date"
                name="courseStartDate"
                onChange={this.handleChange}
                value={courseStartDate}
              />
            </div>
            <div>
              <label>Course end date</label>
              <input
                type="date"
                name="courseEndDate"
                onChange={this.handleChange}
                value={courseEndDate}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Employment History</legend>
            <div>
              <label>companyName</label>
              <input
                type="text"
                name="companyName"
                onChange={this.handleChange}
                value={companyName}
              />
            </div>
            <div>
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                onChange={this.handleChange}
                value={jobTitle}
              />
            </div>
            <div>
              <label>Job Tasks</label>
              <input
                type="text"
                name="jobTasks"
                onChange={this.handleChange}
                value={jobTasks}
              />
            </div>
            <div>
              <label>Job Start Date</label>
              <input
                type="date"
                name="jobStartDate"
                onChange={this.handleChange}
                value={jobStartDate}
              />
            </div>
            <div>
              <label>Job End Date</label>
              <input
                type="date"
                name="jobEndDate"
                onChange={this.handleChange}
                value={jobEndDate}
              />
            </div>
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>
        <Display cv={cv} />
      </div>
    );
  }
}

export default Form;
