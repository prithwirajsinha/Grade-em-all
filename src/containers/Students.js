import React, { Component } from 'react';
import { getFakeStudents } from './../helpers/utility';

import StudentItem from './../components/StudentItem/StudentItem';

class Students extends Component {
  constructor() {
    super();
    this.state = { students: [] };
  }
  componentDidMount() {
    const fakeStudents = getFakeStudents();
    this.setState({ students: fakeStudents });
  }

  navigateToDetails = studentId => {
    this.props.history.push(`/batch/${this.props.match.params.batchYr}/students/${studentId}`);
  };

  render() {
    if (!this.state.students.length) {
      return null;
    }
    return (
      <div className="Students container-fluid m-2 justify-content-center">
        <div className="card-group justify-content-left">
          {this.state.students.map(student => (
            <StudentItem
              nameClicked={() => {
                this.navigateToDetails(student.id);
              }}
              key={student.id}
              student={student}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Students;
