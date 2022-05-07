import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      details: {
        text: "",
      },
    };
  }

  handleChange = () => {
    this.setState({});
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({});
  };

  render() {
    return (
      <form>
        <div>
          <legend>Personal Details</legend>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Phone number</label>
            <input type="tel" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
        </div>

        <div>
          <legend>Education</legend>
          <div>
            <label>Institution</label>
            <input type="text" />
          </div>
          <div>
            <label>Course Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Course start date</label>
            <input type="date" />
          </div>
        </div>

        <div>
          <legend>Work Experience</legend>
          <div>
            <label>Company Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Position held</label>
            <input type="text" />
          </div>
          <div>
            <label>Job start date</label>
            <input type="date" />
          </div>
        </div>
      </form>
    );
  }
}

export default App;
