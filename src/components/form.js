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
      jobTitle: "",
      jobTasks: "",
      jobStartDate: "",
      jobEndDate: "",
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
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                onChange={this.handleChange}
                value={this.state.surname}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
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
                value={this.state.institute}
              />
            </div>
            <div>
              <label>Course name</label>
              <input
                type="text"
                name="courseName"
                onChange={this.handleChange}
                value={this.state.courseName}
              />
            </div>
            <div>
              <label>Course start date</label>
              <input
                type="date"
                name="courseStartDate"
                onChange={this.handleChange}
                value={this.state.courseStartDate}
              />
            </div>
            <div>
              <label>Course end date</label>
              <input
                type="date"
                name="courseEndDate"
                onChange={this.handleChange}
                value={this.state.courseEndDate}
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
                value={this.state.companyName}
              />
            </div>
            <div>
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                onChange={this.handleChange}
                value={this.state.jobTitle}
              />
            </div>
            <div>
              <label>Job Tasks</label>
              <input
                type="textarea"
                name="jobTasks"
                onChange={this.handleChange}
                value={this.state.jobTasks}
              />
            </div>
            <div>
              <label>Job Start Date</label>
              <input
                type="date"
                name="jobStartDate"
                onChange={this.handleChange}
                value={this.state.jobStartDate}
              />
            </div>
            <div>
              <label>Job End Date</label>
              <input
                type="date"
                name="jobEndDate"
                onChange={this.handleChange}
                value={this.state.jobEndDate}
              />
            </div>
          </fieldset>
          <button type="submit">Submit Form</button>
        </form>
        <Display
          name={this.state.name}
          surname={this.state.surname}
          email={this.state.email}
          phone={this.state.phone}
          institute={this.state.institute}
          courseName={this.state.courseName}
          courseStartDate={this.state.courseStartDate}
          courseEndDate={this.state.courseEndDate}
          companyName={this.state.companyName}
          jobTitle={this.state.jobTitle}
          jobTasks={this.state.jobTasks}
          jobStartDate={this.state.jobStartDate}
          jobEndDate={this.state.jobEndDate}
        />
      </div>
    );
  }
}

export default Form;
