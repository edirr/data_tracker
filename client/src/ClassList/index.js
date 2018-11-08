import React, { Component } from "react";
import StudentTile from "../StudentTile";


class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let sendStudentId = this.props.sendStudentId
    let students =
      this.props.students.length < 1
        ? ""
        : this.props.students.map(student => {
            return (
              <li><a className="student" key={student.id} id={student.id} value={student.id} onClick={sendStudentId} >{student.name}</a></li>

            );
          });

    return (
      <aside className="menu class-list">
        <h1 className="class-list-heading">Class List</h1>
        <hr/>
        <ul className="menu-list">{students}</ul>
      </aside>

    );
  }
}

export default ClassList;
