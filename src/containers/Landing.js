import React, { Component } from 'react';

class Landing extends Component {
  constructor() {
    super();
    this.state = { batch: new Date().getFullYear() };
  }
  handleClick = () => {
    this.props.history.push(`/batch/${this.state.batch}/students`);
  };

  handleChange = event => {
    this.setState({ batch: event.target.value });
  };

  render() {
    const getBatches = () => {
      const d = new Date().getFullYear();
      return [d, d - 1, d - 2].map(yr => {
        return (
          <option key={yr} value={yr}>
            {yr}
          </option>
        );
      });
    };
    return (
      <div className="Landing">
        <div className="jumbotron bg-info m-3">
          <h5 className="display-3">Hello, Teacher!</h5>

          <p>Select batch</p>
          <select
            className="custom-select col-md-2"
            name="batch-selector"
            value={this.state.batch}
            onChange={this.handleChange}
          >
            {getBatches()}
          </select>
          <p />
          <button className="btn btn-primary" onClick={this.handleClick}>
            Go &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
