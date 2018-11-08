import React, { Component } from "react";

class CreateStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age:'',
      address: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

updateState(event){
    // destructure the event
    const { name, value } = event.target;

    // set the state as needed
    this.setState({
      [name]: value,
    });
  }

handleSubmit(event) {
console.log(event)
    event.preventDefault();
    const { newStudentSubmitAction } = this.props;

    // const { thing2, thing3, ...good } = this.state
    newStudentSubmitAction(this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
      <p>Add Student</p>
      <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input onChange={this.updateState} name="name" className="input" type="text" value={this.state.name} placeholder="Alex Smith" />
  </div>
</div>

<div className="field">
  <label className="label">Age</label>
  <div className="control">
    <input onChange={this.updateState} name="age" className="input" type="text" value={this.state.age} placeholder="12" />
  </div>
</div>
<div className="field">
  <label className="label">Address</label>
  <div className="control">
    <input onChange={this.updateState} name="address" className="input" type="text" value={this.state.address} placeholder="14 Wavey Ave" />
  </div>
</div>
<div className="field">
  <label className="label">Teacher</label>
  <div className="control">
    <input name="user_id" className="input" type="text" value="1" placeholder="" />
  </div>
</div>
<div class="control">
    <button class="button is-link">Submit</button>
  </div>
</form>

    );
  }
}

export default CreateStudentForm;









