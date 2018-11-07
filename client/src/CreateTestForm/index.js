import React, { Component } from "react";

class CreateTestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test_name: '',
      date:'',
      grade: '',
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
    const { newTestSubmitAction } = this.props;

    // const { thing2, thing3, ...good } = this.state
    newTestSubmitAction(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="field">
  <label className="label">Test Name</label>
  <div className="control">
    <input onChange={this.updateState} name="test_name" className="input" type="text" value={this.state.test_name} placeholder="Unit 1 Spelling Test" />
  </div>
</div>

<div className="field">
  <label className="label">Date</label>
  <div className="control">
    <input onChange={this.updateState} name="date" className="input" type="text" value={this.state.date} placeholder="2018-10-15" />
  </div>
</div>
<div className="field">
  <label className="label">Grade</label>
  <div className="control">
    <input onChange={this.updateState} name="grade" className="input" type="text" value={this.state.grade} placeholder="95" />
  </div>
</div>
<div class="control">
    <button class="button is-link">Submit</button>
  </div>
</form>

    );
  }
}

export default CreateTestForm;
