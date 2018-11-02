import React, { Component } from "react";
import { Link } from "react-router-dom";


const StudentTile = props => {


  return (
    <Link to= {`/student/${props.student.id}`}><p>{props.student.name}</p></Link>
 // <a>{props.student.name}</a>

  );
};

export default StudentTile;
