import React, { Component } from "react";

class EducationDetails extends Component {
  constructor() {
    super();

    this.state = {
      institute: "",
      courseName: "",
      courseStartDate: "",
      courseEndDate: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { institute, courseName, courseStartDate, courseEndDate } =
      this.state;
    const educationInfor = {
      institute,
      courseName,
      courseStartDate,
      courseEndDate,
    };

    return (
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
    );
  }
}

export default EducationDetails;
