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
      this.props.students.length === 0
        ? ""
        : this.props.students.map(student => {
            return (
              <li><a key={student.id} id={student.id} value={student.id} onClick={sendStudentId} >{student.name}</a></li>

            );
          });

    return (
      <aside className="menu class-list">
        <p className="menu-label">Class List</p>
        <ul className="menu-list">{students}</ul>
      </aside>
    );
  }
}

export default ClassList;
