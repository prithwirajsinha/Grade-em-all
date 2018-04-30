import React from 'react';
import './StudentItem.css';

const StudentItem = props => {
  return (
    <div>
      <div className="student-container card m-2">
        <div className="rounded-circle" />
        <div className="card-body">
          <p className="card-text cursor-pointer" onClick={props.nameClicked}>
            {props.student.name}
          </p>
          <p className="card-text">{props.student.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentItem;
