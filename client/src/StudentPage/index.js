import React, { Component } from 'react';


class StudentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single_student_data: [],
    };
    // this.getSingleStudent = this.getSingleStudent.bind(this);
  }

componentDidMount(){
  // getSingleStudent();
}

// async getSingleStudent(){
//     fetch({`/students/${this.props.match.params.id}`})
//       .then((response) => {return response.json()})
//       .then((data) => {this.setState({ single_student_data: data }) });
// }




  render(){
    console.log(this.props)
    let students = this.props.students.length === 0 ? '' : this.props.students.map((student=>{
      return(
        <div>
        <p>{student.name}</p>
        </div>
        )
    }));

    return(
      <div>
      single student
      </div>
      )


  }

}




export default StudentPage;
