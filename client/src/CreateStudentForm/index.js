import React, { Component } from "react";

class CreateStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bla:''
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

// handleSubmit(event) {
// console.log(event)
//     event.preventDefault();
//     const { submitAction } = this.props;

//     const { thing2, thing3, ...good } = this.state
//     submitAction(good);
//   }

  render() {

    return (
      <form>
      <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input name="name" className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>

<div className="field">
  <label className="label">Age</label>
  <div className="control">
    <input name="age" className="input" type="text" placeholder="e.g. 12" />
  </div>
</div>
<div className="field">
  <label className="label">Address</label>
  <div className="control">
    <input name="address" className="input" type="text" placeholder="e.g. 14 Wavey Ave" />
  </div>
</div>
<div className="field">
  <label className="label">Teacher</label>
  <div className="control">
    <input name="user_id" className="input" type="text" value="1" placeholder="e.g. 14 Wavey Ave" />
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









