import React, { Component } from 'react';


const StudentTile = props => (
  <li><a vaule={props.student.id} onClick={props.sendStudentId}>{props.student.name}</a></li>

);

export default StudentTile;
