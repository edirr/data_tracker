# Data Tracker 

[12] Clear and well-written README that describes approach taken, technologies used, code snippet, installation instructions, user stories, wireframes, and ERDs.

#Technologies used
Ruby on Rails 
React 
Chart.js 

#User Stories

As a teacher I want to be able to keep track of my students grades 

As a teacher I want to be able to visually see my 
students grades in an easy to read graph.

As a teacher I want to have my students' profiles and grades in one place. 

#Approach 
For this project I wanted to be able to display each individual student's scores 
on the student page. This was a challenge for me initially but eventually 
created functions in the app and passing them down as props for each student as a 
click event that would set their id to state then use it to make multiple 
fetches to the database to retrieve the tests and info related to that students Ids. 

Another major part of my project was being able to pass down the data to my chart where i can display the scores. The challenging part was making sure the data was formatted the way the chart wanted it. 
 

```javascript
async getSingleStudent(){
  let studentId = `/api/students/${this.state.student_id}`
    await fetch(studentId)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ single_student_data: data }) });
}
  async sendStudentId(e){
      await this.setState({student_id: e.target.id})
      this.getSingleStudent()
      this.getSingleStudentScores();
      this.getSingleStudentMathScores();
  }

```
